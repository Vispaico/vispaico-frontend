// /api/generate-documents/route.ts (Final All-in-One Logic)
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Resend } from 'resend';
import puppeteer from 'puppeteer'; 

const resend = new Resend(process.env.RESEND_API_KEY);

async function createPdf(htmlContent: string): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfUint8Array = await page.pdf({ format: 'a4', printBackground: true });
    await browser.close();
    return Buffer.from(pdfUint8Array);
}

export async function POST(req: NextRequest) {
    try {
        // 1. Get all data from the frontend
        const body = await req.json();
        const { clientName, clientEmail, projectDetails, discount } = body;

        // 2. Generate PDFs (your existing, working logic)
        const basePrice = 899.00;
        const discountAmount = parseFloat(discount) || 0;
        const finalPrice = basePrice - discountAmount;
        const projectNumber = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

        if (!clientName || !clientEmail) { return NextResponse.json({ error: 'Client Name and Email are required' }, { status: 400 }); }

        const contractTemplatePath = path.resolve(process.cwd(), 'templates', 'contract.html');
        const invoiceTemplatePath = path.resolve(process.cwd(), 'templates', 'invoice.html');
        let contractHtml = await fs.readFile(contractTemplatePath, 'utf8');
        let invoiceHtml = await fs.readFile(invoiceTemplatePath, 'utf8');

        contractHtml = contractHtml.replace(/{{CLIENT_NAME}}/g, clientName).replace(/{{CLIENT_EMAIL}}/g, clientEmail).replace(/{{PROJECT_NUMBER}}/g, projectNumber).replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA'));
        let discountHtmlRow = '';
        if (discountAmount > 0) {
            discountHtmlRow = `<tr><td>Quiz Discount</td><td>1</td><td style="color: green;">-$${discountAmount.toFixed(2)}</td></tr>`;
        }
        invoiceHtml = invoiceHtml.replace(/{{CLIENT_NAME}}/g, clientName).replace(/{{CLIENT_EMAIL}}/g, clientEmail).replace(/{{PROJECT_NUMBER}}/g, projectNumber).replace(/{{DATE_ISSUED}}/g, new Date().toLocaleDateString('en-CA')).replace(/{{DISCOUNT_ROW}}/g, discountHtmlRow).replace(/{{FINAL_PRICE}}/g, finalPrice.toFixed(2));
        
        const contractPdf = await createPdf(contractHtml);
        const invoicePdf = await createPdf(invoiceHtml);

        // 3. Email 1: Send documents to Client and for your main records (hola@)
        await resend.emails.send({
            from: 'Vispaico Onboarding <hola@vispaico.com>',
            to: [clientEmail, 'hola@vispaico.com'],
            subject: `Project Kickoff: Your Vispaico Website Agreement & Invoice (${projectNumber})`,
            html: `<p>Hi ${clientName}, documents attached.</p>`, // Simple email
            attachments: [
                { filename: `Contract-${projectNumber}.pdf`, content: contractPdf },
                { filename: `Invoice-${projectNumber}.pdf`, content: invoicePdf },
            ],
        });

        // 4. Email 2: Send the specific internal notification to your project address
        let notificationSubject = `New 3-Day Website Request from ${clientName}`;
        let notificationHtml = `
            <h1>You have a new 3-Day Website Request!</h1>
            <p><strong>Name:</strong> ${clientName}</p>
            <p><strong>Email:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>
            <p><strong>Project Details:</strong></p>
            <p>${projectDetails.replace(/\n/g, '<br>')}</p>
        `;

        if (discountAmount > 0) {
            notificationSubject = `DISCOUNT APPLIED: New 3-Day Website Request from ${clientName}`;
            notificationHtml += `<br><hr><h2>Discount Information</h2><p><strong>Discount Earned from Quiz:</strong> $${discountAmount}</p>`;
        }

        await resend.emails.send({
            from: 'Vispaico Forms <from@vispaico.com>',
            to: ['my-3day-website@vispaico.com'],
            replyTo: clientEmail,
            subject: notificationSubject,
            html: notificationHtml,
        });

        // 5. Send a final success response to the frontend
        return NextResponse.json({ message: 'Documents generated and all emails sent successfully!', projectNumber }, { status: 200 });

    } catch (error) {
        console.error('A FULL ERROR OCCURRED IN THE ENDPOINT:', error);
        return NextResponse.json({ error: 'Failed to generate documents. Check server logs for the full error object.' }, { status: 500 });
    }
}