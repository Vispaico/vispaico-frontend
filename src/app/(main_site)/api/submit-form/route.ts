// File: app/api/submit-form/route.ts (Final Version with Discount Logic)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// --- NEW: Add the optional 'discount' field to the Kickoff type ---
interface KickoffRequestBody {
  formType: 'kickoff';
  name: string;
  email: string;
  project_details: string;
  discount?: string; // Discount is optional
  b_name?: string; 
}

interface ContactRequestBody {
  formType: 'contact';
  name: string;
  email: string;
  company?: string;
  message: string;
  b_name?: string;
}

interface NewsletterRequestBody {
  formType: 'newsletter';
  email: string;
  b_name?: string;
}

type SubmitFormRequestBody = KickoffRequestBody | ContactRequestBody | NewsletterRequestBody;

// Use a more descriptive "from" address for clarity
const FROM_EMAIL = 'forms@vispaico.com'; 

export async function POST(req: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Server Error: RESEND_API_KEY is not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    const resend = new Resend(resendApiKey);

    const body: SubmitFormRequestBody = await req.json();

    if (body.b_name) {
      return NextResponse.json({ success: true }); // Silently succeed for bots
    }

    let subject = '';
    let htmlContent = '';
    let toEmail = '';
    let replyTo = '';

    switch (body.formType) {
      case 'kickoff':
        // --- THIS IS THE MODIFIED LOGIC ---
        toEmail = 'my-3day-website@vispaico.com'; // Your specific kickoff email
        replyTo = body.email;

        // Start with the base content
        htmlContent = `
          <h1>You have a new 3-Day Website Request!</h1>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Project Details:</strong></p>
          <p>${body.project_details.replace(/\n/g, '<br>')}</p>
        `;

        // Check for a discount and modify the subject and content if it exists
        if (body.discount && Number(body.discount) > 0) {
          subject = `DISCOUNT APPLIED: New 3-Day Website Request from ${body.name}`;
          htmlContent += `<br><hr><h2>Discount Information</h2><p><strong>Discount Earned from Quiz:</strong> $${body.discount}</p>`;
        } else {
          subject = `New 3-Day Website Request from ${body.name}`;
        }
        break;

      case 'contact':
        toEmail = 'hola@vispaico.com';
        subject = `New Contact Message from ${body.name}`;
        replyTo = body.email;
        htmlContent = `
          <h3>New message from the contact form on vispaico.com</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
        `;
        break;

      case 'newsletter':
        if (!body.email) {
          return NextResponse.json({ error: 'Email is required for newsletter signup.' }, { status: 400 });
        }
        toEmail = 'newsletter@vispaico.com';
        subject = `Vispaico Newsletter: New Subscription`;
        replyTo = body.email;
        htmlContent = `
            <h3>New Subscriber Added to Your List</h3>
            <p><strong>Email Address:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
        `;
        break;

      default:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NextResponse.json({ error: `Invalid form type specified: ${(body as any)?.formType}` }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `Vispaico Forms <${FROM_EMAIL}>`,
      to: [toEmail],
      subject: subject,
      replyTo: replyTo,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend returned an error:', error);
      return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('An internal server error occurred:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}