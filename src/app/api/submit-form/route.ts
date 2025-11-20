// /app/(main_site)/api/submit-form/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as paypal from '@paypal/checkout-server-sdk';
import QRCode from 'qrcode';
import fs from 'fs/promises';
import path from 'path';

async function createPdf(htmlContent: string): Promise<Buffer> {
  const response = await fetch('https://v2018.api2pdf.com/chrome/html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.API2PDF_KEY!,
    },
    body: JSON.stringify({
      html: htmlContent,
      options: { format: 'A4', printBackground: true, landscape: false },
    }),
  });
  const data = await response.json();
  if (!data.success) { throw new Error(`Api2Pdf failed: ${data.message || 'Unknown error'}`); }
  const pdfUrl = data.pdf;
  const pdfResponse = await fetch(pdfUrl);
  if (!pdfResponse.ok) { throw new Error(`Failed to download the generated PDF from ${pdfUrl}`); }
  const pdfBuffer = await pdfResponse.arrayBuffer();
  return Buffer.from(pdfBuffer);
}

interface KickoffRequestBody { formType: 'kickoff'; name: string; email: string; project_details: string; discount?: string; b_name?: string; }
interface DynamicKickoffRequestBody { formType: 'dynamic_kickoff'; name: string; email: string; project_details: string; service: string; discount?: string; b_name?: string; }
interface ContactRequestBody { formType: 'contact'; name: string; email: string; company?: string; message: string; b_name?: string; }
interface NewsletterRequestBody { formType: 'newsletter'; email: string; b_name?: string; }
type SubmitFormRequestBody =
  | KickoffRequestBody
  | DynamicKickoffRequestBody
  | ContactRequestBody
  | NewsletterRequestBody;

type PricingConfig = {
  amount: number;
  currency: string;
  locale?: string;
};

type ServiceConfig = {
  name: string;
  contract: string;
  pricing: {
    default: PricingConfig;
    [locale: string]: PricingConfig;
  };
};

const serviceDetails: Record<string, ServiceConfig> = {
  'vispaico-growth-website': {
    name: 'Vispaico Growth Website',
    contract: 'contract.html',
    pricing: {
      default: { amount: 899, currency: 'USD', locale: 'en-US' },
      de: { amount: 790, currency: 'EUR', locale: 'de-DE' }
    }
  }
};

const DEFAULT_CURRENCY_LOCALES: Record<string, string> = {
  USD: 'en-US',
  EUR: 'de-DE'
};

const normalizeLocale = (value: string) => (value || 'en').toLowerCase();

const parseDiscountValue = (value?: string) => {
  if (!value) {
    return 0;
  }
  const numeric = Number.parseFloat(value.replace(/[^0-9.-]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
};

const formatCurrencyValue = (amount: number, currency: string, locale: string) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

const getServiceConfig = (serviceKey: string, locale: string) => {
  const config = serviceDetails[serviceKey];
  if (!config) {
    throw new Error('Invalid service selected.');
  }
  const normalized = normalizeLocale(locale);
  const pricing = config.pricing[normalized] ?? config.pricing.default;
  const currencyLocale = pricing.locale ?? DEFAULT_CURRENCY_LOCALES[pricing.currency] ?? 'en-US';
  return {
    name: config.name,
    contract: config.contract,
    amount: pricing.amount,
    currency: pricing.currency,
    currencyLocale
  };
};

const replacePricePlaceholders = (html: string, basePrice: string, finalPrice: string) =>
  html
    .replace(/\$\{\{BASE_PRICE\}\}/g, basePrice)
    .replace(/{{BASE_PRICE}}/g, basePrice)
    .replace(/\$\{\{FINAL_PRICE\}\}/g, finalPrice)
    .replace(/{{FINAL_PRICE}}/g, finalPrice);

const paypalCredentialsAvailable = Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);

type PayPalMode = 'live' | 'sandbox';

const resolveConfiguredMode = (): PayPalMode => {
  const rawMode = process.env.PAYPAL_ENVIRONMENT ?? process.env.PAYPAL_MODE ?? '';
  const mode = rawMode.trim().toLowerCase();
  if (mode === 'live' || mode === 'production') {
    return 'live';
  }
  if (mode === 'sandbox' || mode === 'test') {
    return 'sandbox';
  }
  return process.env.NODE_ENV === 'production' ? 'live' : 'sandbox';
};

const createPayPalEnvironment = (mode: PayPalMode, clientId: string, clientSecret: string) =>
  mode === 'live'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);

const payPalClient = (preferredMode?: PayPalMode) => {
  if (!paypalCredentialsAvailable) {
    throw new Error('PayPal credentials are not configured.');
  }
  const clientId = process.env.PAYPAL_CLIENT_ID as string;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET as string;
  const mode = preferredMode ?? resolveConfiguredMode();
  const environment = createPayPalEnvironment(mode, clientId, clientSecret);
  return { client: new paypal.core.PayPalHttpClient(environment), mode };
};

const isInvalidClientError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const maybeError = error as { message?: unknown; result?: unknown; statusCode?: unknown };
  const lower = (value: unknown) => (typeof value === 'string' ? value.toLowerCase() : '');

  if (lower(maybeError.message).includes('invalid_client')) {
    return true;
  }

  const result = maybeError.result as { name?: unknown; details?: unknown } | undefined;
  if (result) {
    if (lower(result.name).includes('invalid_client')) {
      return true;
    }
    const details = result.details as Array<{ description?: unknown }> | undefined;
    if (Array.isArray(details) && details.some((detail) => lower(detail?.description).includes('invalid client'))) {
      return true;
    }
  }

  if (maybeError.statusCode === 401) {
    return true;
  }

  return false;
};

type PaymentArtifacts = {
  paymentLinkUrl: string;
  qrCodeDataUrl: string;
  usedFallback: boolean;
};

const buildFallbackPaymentArtifacts = async (reference: string): Promise<PaymentArtifacts> => {
  const fallbackUrl = `https://www.paypal.com/checkoutnow?token=DEV-${encodeURIComponent(reference)}`;
  return {
    paymentLinkUrl: fallbackUrl,
    qrCodeDataUrl: await QRCode.toDataURL(fallbackUrl),
    usedFallback: true as const
  };
};

let devPayPalFallbackLogged = false;

const getRequestLocale = (request: NextRequest) => {
  const headerLocale = request.headers.get('x-next-intl-locale');
  if (!headerLocale) {
    return 'en';
  }
  return headerLocale.split('-')[0] || 'en';
};

const resolveTemplateName = (baseName: string, locale: string) => {
  const normalizedLocale = locale.toLowerCase();
  if (normalizedLocale === 'en') {
    return baseName;
  }

  const explicitPrefixes: Record<string, string> = {
    vi: 'VN',
    vn: 'VN',
    es: 'ES',
    de: 'DE'
  };

  const localePrefix = explicitPrefixes[normalizedLocale] ?? normalizedLocale.toUpperCase();
  return `${localePrefix}_${baseName}`;
};

const loadTemplate = async (baseName: string, locale: string): Promise<string> => {
  const templateDir = path.resolve(process.cwd(), 'templates');
  const localizedName = resolveTemplateName(baseName, locale);
  try {
    return await fs.readFile(path.join(templateDir, localizedName), 'utf8');
  } catch (error) {
    if (localizedName !== baseName) {
      try {
        return await fs.readFile(path.join(templateDir, baseName), 'utf8');
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
    throw error;
  }
};

async function createPaymentArtifacts({
  projectNumber,
  description,
  currency,
  baseAmount,
  discountAmount,
  finalAmount
}: {
  projectNumber: string;
  description: string;
  currency: string;
  baseAmount: number;
  discountAmount: number;
  finalAmount: number;
}): Promise<PaymentArtifacts> {
  if (!paypalCredentialsAvailable) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('PayPal credentials are not configured.');
    }
    return buildFallbackPaymentArtifacts(projectNumber);
  }

  const orderRequest = new paypal.orders.OrdersCreateRequest();
  orderRequest.prefer('return=representation');
  const baseValue = baseAmount.toFixed(2);
  const discountValue = discountAmount.toFixed(2);
  const finalValue = finalAmount.toFixed(2);

  orderRequest.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      invoice_id: projectNumber,
      description,
      amount: {
        currency_code: currency,
        value: finalValue,
        breakdown: {
          item_total: { currency_code: currency, value: baseValue },
          discount: { currency_code: currency, value: discountValue },
          shipping: { currency_code: currency, value: '0.00' },
          handling: { currency_code: currency, value: '0.00' },
          tax_total: { currency_code: currency, value: '0.00' },
          insurance: { currency_code: currency, value: '0.00' },
          shipping_discount: { currency_code: currency, value: '0.00' }
        }
      },
      items: [{
        name: description,
        unit_amount: { currency_code: currency, value: baseValue },
        quantity: '1',
        category: 'DIGITAL_GOODS'
      }]
    }]
  });

  const preferredMode = resolveConfiguredMode();
  const modesToTry: PayPalMode[] = preferredMode === 'live' ? ['live', 'sandbox'] : ['sandbox', 'live'];
  const attempted: Array<{ mode: PayPalMode; error: unknown }> = [];

  for (const mode of modesToTry) {
    try {
      const { client } = payPalClient(mode);
      const order = await client.execute(orderRequest);
      const paymentLinkUrl = order.result.links?.find((link: { rel: string; href: string }) => link.rel === 'approve')?.href;
      if (!paymentLinkUrl) {
        throw new Error('Missing approval link from PayPal response.');
      }
      return {
        paymentLinkUrl,
        qrCodeDataUrl: await QRCode.toDataURL(paymentLinkUrl),
        usedFallback: false as const
      };
    } catch (error) {
      attempted.push({ mode, error });
      if (!isInvalidClientError(error) || mode === modesToTry[modesToTry.length - 1]) {
        break;
      }
      // Otherwise try next mode
    }
  }

  const lastAttempt = attempted[attempted.length - 1];

  if (process.env.NODE_ENV !== 'production') {
    if (!devPayPalFallbackLogged) {
      const lastErrorMessage = lastAttempt?.error instanceof Error ? lastAttempt.error.message : JSON.stringify(lastAttempt?.error);
      const attemptedModes = attempted.map((entry) => entry.mode).join(' → ');
      console.info(`PayPal order creation failed in development (attempted modes: ${attemptedModes || 'none'}; last error: ${lastErrorMessage}); using mock checkout link instead.`);
      devPayPalFallbackLogged = true;
    }
    return buildFallbackPaymentArtifacts(projectNumber);
  }

  throw (lastAttempt?.error ?? new Error('PayPal order creation failed.'));
}

const FROM_EMAIL = 'from@vispaico.com';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const body: SubmitFormRequestBody = await req.json();
    const locale = getRequestLocale(req);

    if (body.b_name) { return NextResponse.json({ success: true }); }

    switch (body.formType) {
      case 'kickoff': {
        const projectNumber = `VISPAICO-${Date.now()}`;
        const kickoffService = getServiceConfig('vispaico-growth-website', locale);
        const productName = 'Vispaico Growth Website Service';

        const discountAmountRaw = Math.max(0, parseDiscountValue(body.discount));
        const discountAmount = Math.min(discountAmountRaw, kickoffService.amount);
        const finalAmount = Math.max(Number.parseFloat((kickoffService.amount - discountAmount).toFixed(2)), 0);

        const { paymentLinkUrl, qrCodeDataUrl, usedFallback } = await createPaymentArtifacts({
          projectNumber,
          description: productName,
          currency: kickoffService.currency,
          baseAmount: kickoffService.amount,
          discountAmount,
          finalAmount
        });

        let contractHtml = await loadTemplate(kickoffService.contract, locale);
        let invoiceHtml = await loadTemplate('invoice.html', locale);

        const formattedBasePrice = formatCurrencyValue(kickoffService.amount, kickoffService.currency, kickoffService.currencyLocale);
        const formattedFinalPrice = formatCurrencyValue(finalAmount, kickoffService.currency, kickoffService.currencyLocale);
        const formattedDiscount = formatCurrencyValue(discountAmount, kickoffService.currency, kickoffService.currencyLocale);

        contractHtml = contractHtml
          .replace(/{{CLIENT_NAME}}/g, body.name)
          .replace(/{{CLIENT_EMAIL}}/g, body.email)
          .replace(/{{PROJECT_NUMBER}}/g, projectNumber);

        invoiceHtml = replacePricePlaceholders(
          invoiceHtml
            .replace(/{{CLIENT_NAME}}/g, body.name)
            .replace(/{{CLIENT_EMAIL}}/g, body.email)
            .replace(/{{PROJECT_NUMBER}}/g, projectNumber)
            .replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA'))
            .replace(/{{PAYMENT_LINK_URL}}/g, paymentLinkUrl)
            .replace(/{{QR_CODE_DATA_URL}}/g, qrCodeDataUrl)
            .replace(/{{PRODUCT_NAME}}/g, productName),
          formattedBasePrice,
          formattedFinalPrice
        );

        const discountHtmlRow = discountAmount > 0
          ? `<tr><td>Quiz Discount</td><td>1</td><td style="color: green;">-${formattedDiscount}</td></tr>`
          : '';
        invoiceHtml = invoiceHtml.replace(/{{DISCOUNT_ROW}}/g, discountHtmlRow);

        const contractPdf = await createPdf(contractHtml);
        const invoicePdf = await createPdf(invoiceHtml);

        await resend.emails.send({
          from: 'Vispaico Onboarding <hola@vispaico.com>',
          to: [body.email, 'hola@vispaico.com'],
          subject: `Project Kickoff: Your Vispaico Website Agreement & Invoice (${projectNumber})`,
          html: `<p>Hi ${body.name}, your documents are attached.</p>`,
          attachments: [
            { filename: `Contract-${projectNumber}.pdf`, content: contractPdf },
            { filename: `Invoice-${projectNumber}.pdf`, content: invoicePdf }
          ]
        });

        let teamSubject = `New Growth Website request from ${body.name}`;
        let teamHtml = `<h1>You have a new Growth Website request!</h1><p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p><p><strong>Project Details:</strong></p><p>${body.project_details.replace(/\n/g, '<br>')}</p>`;
        if (discountAmount > 0) {
          teamSubject = `DISCOUNT APPLIED: New Growth Website request from ${body.name}`;
          teamHtml += `<br><hr><h2>Discount Information</h2><p><strong>Discount Earned from Quiz:</strong> ${formattedDiscount}</p>`;
        }
        if (usedFallback) {
          teamHtml += `<br><hr><p><strong>Payment Link:</strong> ${paymentLinkUrl} (fallback generated in ${process.env.NODE_ENV || 'development'} mode)</p>`;
        }
        await resend.emails.send({
          from: `Vispaico Forms <${FROM_EMAIL}>`,
          to: ['my-3day-website@vispaico.com'],
          subject: teamSubject,
          replyTo: body.email,
          html: teamHtml
        });

        return NextResponse.json({ success: true });
      }

      case 'dynamic_kickoff': {
        let serviceConfig: ReturnType<typeof getServiceConfig>;
        try {
          serviceConfig = getServiceConfig(body.service, locale);
        } catch {
          return NextResponse.json({ error: 'Invalid service selected.' }, { status: 400 });
        }

        const dynamicProjectNumber = `VISPAICO-${Date.now()}`;
        const dynamicDiscountRaw = Math.max(0, parseDiscountValue(body.discount));
        const dynamicDiscountAmount = Math.min(dynamicDiscountRaw, serviceConfig.amount);
        const dynamicFinalAmount = Math.max(Number.parseFloat((serviceConfig.amount - dynamicDiscountAmount).toFixed(2)), 0);

        const { paymentLinkUrl: dynamicPaymentLinkUrl, qrCodeDataUrl: dynamicQrCodeDataUrl, usedFallback: dynamicUsedFallback } = await createPaymentArtifacts({
          projectNumber: dynamicProjectNumber,
          description: serviceConfig.name,
          currency: serviceConfig.currency,
          baseAmount: serviceConfig.amount,
          discountAmount: dynamicDiscountAmount,
          finalAmount: dynamicFinalAmount
        });

        let dynamicContractHtml = await loadTemplate(serviceConfig.contract, locale);
        let dynamicInvoiceHtml = await loadTemplate('invoice.html', locale);

        const dynamicFormattedBasePrice = formatCurrencyValue(serviceConfig.amount, serviceConfig.currency, serviceConfig.currencyLocale);
        const dynamicFormattedFinalPrice = formatCurrencyValue(dynamicFinalAmount, serviceConfig.currency, serviceConfig.currencyLocale);
        const dynamicFormattedDiscount = formatCurrencyValue(dynamicDiscountAmount, serviceConfig.currency, serviceConfig.currencyLocale);

        dynamicContractHtml = dynamicContractHtml
          .replace(/{{CLIENT_NAME}}/g, body.name)
          .replace(/{{CLIENT_EMAIL}}/g, body.email)
          .replace(/{{PROJECT_NUMBER}}/g, dynamicProjectNumber);

        dynamicInvoiceHtml = replacePricePlaceholders(
          dynamicInvoiceHtml
            .replace(/{{CLIENT_NAME}}/g, body.name)
            .replace(/{{CLIENT_EMAIL}}/g, body.email)
            .replace(/{{PROJECT_NUMBER}}/g, dynamicProjectNumber)
            .replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA'))
            .replace(/{{PAYMENT_LINK_URL}}/g, dynamicPaymentLinkUrl)
            .replace(/{{QR_CODE_DATA_URL}}/g, dynamicQrCodeDataUrl)
            .replace(/{{PRODUCT_NAME}}/g, serviceConfig.name),
          dynamicFormattedBasePrice,
          dynamicFormattedFinalPrice
        );

        const dynamicDiscountHtmlRow = dynamicDiscountAmount > 0
          ? `<tr><td>Quiz Discount</td><td>1</td><td style="color: green;">-${dynamicFormattedDiscount}</td></tr>`
          : '';
        dynamicInvoiceHtml = dynamicInvoiceHtml.replace(/{{DISCOUNT_ROW}}/g, dynamicDiscountHtmlRow);

        const dynamicContractPdf = await createPdf(dynamicContractHtml);
        const dynamicInvoicePdf = await createPdf(dynamicInvoiceHtml);

        await resend.emails.send({
          from: 'Vispaico Onboarding <hola@vispaico.com>',
          to: [body.email, 'hola@vispaico.com'],
          subject: `Project Kickoff: Your ${serviceConfig.name} Agreement & Invoice (${dynamicProjectNumber})`,
          html: `<p>Hi ${body.name}, your documents are attached.</p>`,
          attachments: [
            { filename: `Contract-${dynamicProjectNumber}.pdf`, content: dynamicContractPdf },
            { filename: `Invoice-${dynamicProjectNumber}.pdf`, content: dynamicInvoicePdf }
          ]
        });

        let dynamicTeamSubject = `New ${serviceConfig.name} Request from ${body.name}`;
        let dynamicTeamHtml = `<h1>You have a new ${serviceConfig.name} Request!</h1><p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p><p><strong>Project Details:</strong></p><p>${body.project_details.replace(/\n/g, '<br>')}</p>`;
        if (dynamicDiscountAmount > 0) {
          dynamicTeamSubject = `DISCOUNT APPLIED: New ${serviceConfig.name} Request from ${body.name}`;
          dynamicTeamHtml += `<br><hr><h2>Discount Information</h2><p><strong>Discount Earned from Quiz:</strong> ${dynamicFormattedDiscount}</p>`;
        }
        if (dynamicUsedFallback) {
          dynamicTeamHtml += `<br><hr><p><strong>Payment Link:</strong> ${dynamicPaymentLinkUrl} (fallback generated in ${process.env.NODE_ENV || 'development'} mode)</p>`;
        }
        await resend.emails.send({
          from: `Vispaico Forms <${FROM_EMAIL}>`,
          to: ['contact@vispaico.com'],
          subject: dynamicTeamSubject,
          replyTo: body.email,
          html: dynamicTeamHtml
        });

        return NextResponse.json({ success: true });
      }

      case 'contact': {
        // NOTE: The 'contact' and 'newsletter' cases are simplified for brevity. 
        // You would have your full logic here.
        await resend.emails.send({
            from: `Vispaico Contact Form <${FROM_EMAIL}>`,
            to: ['hey@vispaico.com'],
            subject: `New Contact Form Submission from ${body.name}`,
            replyTo: body.email,
            html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Company: ${body.company || 'N/A'}</p><p>Message: ${body.message}</p>`,
        });
        return NextResponse.json({ success: true });
      }
      case 'newsletter': {
        await resend.emails.send({
            from: `Vispaico Newsletter <${FROM_EMAIL}>`,
            to: ['newsletter@vispaico.com'],
            subject: 'New Newsletter Signup',
            html: `<p>${body.email} has signed up for the newsletter.</p>`,
        });
        return NextResponse.json({ success: true });
      }
      default:
        return NextResponse.json({ error: 'Invalid form type.' }, { status: 400 });
    }

  } catch (error: unknown) {
    console.error('An internal server error occurred:', error);
    if (error && typeof error === 'object' && 'statusCode' in error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error('PayPal API Error:', (error as any).result);
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}
