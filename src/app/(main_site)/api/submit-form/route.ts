// /app/(main_site)/api/submit-form/route.ts (Final Type-Safe Version)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import fs from 'fs/promises';
import path from 'path';

// All interfaces are correctly defined
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

const FROM_EMAIL = 'from@vispaico.com'; 

// PDF helper function with the corrected launch options
async function createPdf(htmlContent: string): Promise<Buffer> {
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: true, // Set directly to a boolean to satisfy TypeScript
        // We omit defaultViewport to use Puppeteer's default and avoid the type error
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfUint8Array = await page.pdf({ format: 'a4', printBackground: true });
    await browser.close();
    return Buffer.from(pdfUint8Array);
}

export async function POST(req: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    const resend = new Resend(resendApiKey);
    const body: SubmitFormRequestBody = await req.json();

    if (body.b_name) {
      return NextResponse.json({ success: true });
    }

    switch (body.formType) {
      case 'kickoff':
        const discountAmount = parseFloat(body.discount || '0') || 0;
        const finalPrice = 899.00 - discountAmount;
        const projectNumber = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
        
        const contractTemplatePath = path.resolve(process.cwd(), 'templates', 'contract.html');
        const invoiceTemplatePath = path.resolve(process.cwd(), 'templates', 'invoice.html');
        let contractHtml = await fs.readFile(contractTemplatePath, 'utf8');
        let invoiceHtml = await fs.readFile(invoiceTemplatePath, 'utf8');
        
        contractHtml = contractHtml.replace(/{{CLIENT_NAME}}/g, body.name).replace(/{{CLIENT_EMAIL}}/g, body.email).replace(/{{PROJECT_NUMBER}}/g, projectNumber).replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA'));
        let discountHtmlRow = '';
        if (discountAmount > 0) {
            discountHtmlRow = `<tr><td>Quiz Discount</td><td>1</td><td style="color: green;">-$${discountAmount.toFixed(2)}</td></tr>`;
        }
        invoiceHtml = invoiceHtml.replace(/{{CLIENT_NAME}}/g, body.name).replace(/{{CLIENT_EMAIL}}/g, body.email).replace(/{{PROJECT_NUMBER}}/g, projectNumber).replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA')).replace(/{{DISCOUNT_ROW}}/g, discountHtmlRow).replace(/{{FINAL_PRICE}}/g, finalPrice.toFixed(2));
        
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

  } catch (error) {
    console.error('An internal server error occurred:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}