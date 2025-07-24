// /app/(main_site)/api/submit-form/route.ts (Final Version with Api2Pdf AND maxDuration)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
// Puppeteer and Chromium are gone.
import * as paypal from '@paypal/checkout-server-sdk';
import QRCode from 'qrcode';
import fs from 'fs/promises';
import path from 'path';

// --- THIS IS THE VERCEL FIX ---
// Give the function up to 30 seconds to complete all API calls.
export const maxDuration = 30;

// --- Interfaces are correctly defined ---
interface KickoffRequestBody {
  formType: 'kickoff'; name: string; email: string; project_details: string; discount?: string; b_name?: string; 
}
interface ContactRequestBody {
  formType: 'contact'; name: string; email: string; company?: string; message: string; b_name?: string;
}
interface NewsletterRequestBody {
  formType: 'newsletter'; email: string; b_name?: string;
}
type SubmitFormRequestBody = KickoffRequestBody | ContactRequestBody | NewsletterRequestBody;

// --- PayPal client is correctly defined ---
const payPalClient = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  
  // --- THIS IS THE TEMPORARY CHANGE ---
  // We are forcing Sandbox mode to match your Vercel test keys.
  const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
  
  return new paypal.core.PayPalHttpClient(environment);
};

const FROM_EMAIL = 'from@vispaico.com';

// --- PDF Helper function using Api2Pdf is correctly defined ---
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
  if (!data.success) {
    throw new Error(`Api2Pdf failed: ${data.message || 'Unknown error'}`);
  }

  const pdfUrl = data.pdf;
  const pdfResponse = await fetch(pdfUrl);
  if (!pdfResponse.ok) {
    throw new Error(`Failed to download the generated PDF from ${pdfUrl}`);
  }

  const pdfBuffer = await pdfResponse.arrayBuffer();
  return Buffer.from(pdfBuffer);
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const body: SubmitFormRequestBody = await req.json();

    if (body.b_name) { return NextResponse.json({ success: true }); }

    switch (body.formType) {
      case 'kickoff':
        const discountAmount = parseFloat(body.discount || '0') || 0;
        const finalPrice = (899.00 - discountAmount).toFixed(2);
        const projectNumber = `VISPAICO-${new Date().getTime()}`;

        const orderRequest = new paypal.orders.OrdersCreateRequest();
        orderRequest.prefer("return=representation");
        orderRequest.requestBody({
          intent: 'CAPTURE',
          purchase_units: [{
            invoice_id: projectNumber,
            description: 'Vispaico 3-Day Website Service',
            amount: {
              currency_code: 'USD', value: finalPrice,
              breakdown: {
                item_total: { currency_code: 'USD', value: '899.00' },
                discount: { currency_code: 'USD', value: discountAmount.toFixed(2) },
                shipping: { currency_code: 'USD', value: '0.00' }, handling: { currency_code: 'USD', value: '0.00' },
                tax_total: { currency_code: 'USD', value: '0.00' }, insurance: { currency_code: 'USD', value: '0.00' },
                shipping_discount: { currency_code: 'USD', value: '0.00' },
              }
            },
            items: [{
              name: 'Vispaico 3-Day Website Service',
              unit_amount: { currency_code: 'USD', value: '899.00' },
              quantity: '1', category: 'DIGITAL_GOODS' 
            }]
          }]
        });

        const order = await payPalClient().execute(orderRequest);
        const paymentLinkUrl = order.result.links.find((link: { rel: string, href: string }) => link.rel === 'approve').href;
        const qrCodeDataUrl = await QRCode.toDataURL(paymentLinkUrl);

        let contractHtml = await fs.readFile(path.resolve(process.cwd(), 'templates', 'contract.html'), 'utf8');
        let invoiceHtml = await fs.readFile(path.resolve(process.cwd(), 'templates', 'invoice.html'), 'utf8');
        
        contractHtml = contractHtml.replace(/{{PROJECT_NUMBER}}/g, projectNumber);
        invoiceHtml = invoiceHtml.replace(/{{CLIENT_NAME}}/g, body.name).replace(/{{CLIENT_EMAIL}}/g, body.email).replace(/{{PROJECT_NUMBER}}/g, projectNumber).replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA')).replace(/{{FINAL_PRICE}}/g, finalPrice).replace(/{{PAYMENT_LINK_URL}}/g, paymentLinkUrl).replace(/{{QR_CODE_DATA_URL}}/g, qrCodeDataUrl);
        let discountHtmlRow = '';
        if (discountAmount > 0) {
            discountHtmlRow = `<tr><td>Quiz Discount</td><td>1</td><td style="color: green;">-$${discountAmount.toFixed(2)}</td></tr>`;
        }
        invoiceHtml = invoiceHtml.replace(/{{DISCOUNT_ROW}}/g, discountHtmlRow);
        
        const contractPdf = await createPdf(contractHtml);
        const invoicePdf = await createPdf(invoiceHtml);

        await resend.emails.send({
            from: 'Vispaico Onboarding <hola@vispaico.com>', to: [body.email, 'hola@vispaico.com'], subject: `Project Kickoff: Your Vispaico Website Agreement & Invoice (${projectNumber})`, html: `<p>Hi ${body.name}, your documents are attached.</p>`, attachments: [{ filename: `Contract-${projectNumber}.pdf`, content: contractPdf }, { filename: `Invoice-${projectNumber}.pdf`, content: invoicePdf }],
        });

        let teamSubject = `New 3-Day Website Request from ${body.name}`;
        let teamHtml = `<h1>You have a new 3-Day Website Request!</h1><p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p><p><strong>Project Details:</strong></p><p>${body.project_details.replace(/\n/g, '<br>')}</p>`;
        if (discountAmount > 0) {
            teamSubject = `DISCOUNT APPLIED: New 3-Day Website Request from ${body.name}`; teamHtml += `<br><hr><h2>Discount Information</h2><p><strong>Discount Earned from Quiz:</strong> $${body.discount}</p>`;
        }
        await resend.emails.send({
            from: `Vispaico Forms <${FROM_EMAIL}>`, to: ['my-3day-website@vispaico.com'], subject: teamSubject, replyTo: body.email, html: teamHtml,
        });
        
        return NextResponse.json({ success: true });

      case 'contact': {
        const toEmail = 'hola@vispaico.com';
        const subject = `New Contact Message from ${body.name}`;
        const htmlContent = `<h3>New message from the contact form on vispaico.com</h3><p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}<p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, '<br>')}</p>`;
        await resend.emails.send({ from: `Vispaico Forms <${FROM_EMAIL}>`, to: [toEmail], subject, replyTo: body.email, html: htmlContent });
        break;
      }
      case 'newsletter': {
        if (!body.email) { return NextResponse.json({ error: 'Email is required for newsletter signup.' }, { status: 400 }); }
        const toEmail = 'newsletter@vispaico.com';
        const subject = `Vispaico Newsletter: New Subscription`;
        const htmlContent = `<h3>New Subscriber Added to Your List</h3><p><strong>Email Address:</strong> <a href="mailto:${body.email}">${body.email}</a></p>`;
        await resend.emails.send({ from: `Vispaico Forms <${FROM_EMAIL}>`, to: [toEmail], subject, replyTo: body.email, html: htmlContent });
        break;
      }
      default: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NextResponse.json({ error: `Invalid form type specified: ${(body as any)?.formType}` }, { status: 400 });
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: unknown) {
    console.error('An internal server error occurred:', error);
    if (error && typeof error === 'object' && 'statusCode' in error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error('PayPal API Error:', (error as any).result);
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}