// /app/(main_site)/api/submit-form/route.ts (Final Version with Contract Fix and Production-Ready Logic)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as paypal from '@paypal/checkout-server-sdk';
import QRCode from 'qrcode';
import fs from 'fs/promises';
import path from 'path';

// This is the Api2Pdf service, which is fast and reliable.
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

// All interfaces are correctly defined.
interface KickoffRequestBody { formType: 'kickoff'; name: string; email: string; project_details: string; discount?: string; b_name?: string; }
interface ContactRequestBody { formType: 'contact'; name: string; email: string; company?: string; message: string; b_name?: string; }
interface NewsletterRequestBody { formType: 'newsletter'; email: string; b_name?: string; }
type SubmitFormRequestBody = KickoffRequestBody | ContactRequestBody | NewsletterRequestBody;

// --- THIS IS THE PRODUCTION-READY PAYPAL CLIENT ---
// It will automatically use Live keys on Vercel and Sandbox keys locally.
const payPalClient = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  const environment = process.env.NODE_ENV === 'production'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);
  return new paypal.core.PayPalHttpClient(environment);
};

const FROM_EMAIL = 'from@vispaico.com';

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
            invoice_id: projectNumber, description: 'Vispaico 3-Day Website Service',
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
            items: [{ name: 'Vispaico 3-Day Website Service', unit_amount: { currency_code: 'USD', value: '899.00' }, quantity: '1', category: 'DIGITAL_GOODS' }]
          }]
        });

        const order = await payPalClient().execute(orderRequest);
        const paymentLinkUrl = order.result.links.find((link: { rel: string, href: string }) => link.rel === 'approve').href;
        const qrCodeDataUrl = await QRCode.toDataURL(paymentLinkUrl);

        let contractHtml = await fs.readFile(path.resolve(process.cwd(), 'templates', 'contract.html'), 'utf8');
        let invoiceHtml = await fs.readFile(path.resolve(process.cwd(), 'templates', 'invoice.html'), 'utf8');
        
        // --- THIS IS THE FIX ---
        // The contract now correctly gets all its placeholders replaced.
        contractHtml = contractHtml
          .replace(/{{CLIENT_NAME}}/g, body.name)
          .replace(/{{CLIENT_EMAIL}}/g, body.email)
          .replace(/{{PROJECT_NUMBER}}/g, projectNumber);

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

      case 'contact': { /* Your existing contact logic */ }
      case 'newsletter': { /* Your existing newsletter logic */ }
      default: { /* Your existing default logic */ }
    }

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    console.error('An internal server error occurred:', error);
    if (error && typeof error === 'object' && 'statusCode' in error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error('PayPal API Error:', (error as any).result);
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}