// File: app/api/submit-form/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Define expected request body structures for type safety
interface KickoffRequestBody {
  formType: 'kickoff';
  name: string;
  email: string;
  project_details: string;
  b_name?: string; // Honeypot field
}

interface ContactRequestBody {
  formType: 'contact';
  name: string;
  email: string;
  company?: string;
  message: string;
  b_name?: string; // Honeypot field
}

interface NewsletterRequestBody {
  formType: 'newsletter';
  email: string;
  b_name?: string; // Honeypot field
}

type SubmitFormRequestBody = KickoffRequestBody | ContactRequestBody | NewsletterRequestBody;

// This will be the single, verified sending address in your Resend account
const FROM_EMAIL = 'my-3day-website@vispaico.com';

export async function POST(req: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Server configuration error: RESEND_API_KEY is not set.' }, { status: 500 });
    }
    const resend = new Resend(resendApiKey);

    const body: SubmitFormRequestBody = await req.json();

    // --- HONEYPOT SPAM CHECK ---
    // If the hidden b_name field is filled out, it's likely a bot.
    // We send a success response to trick the bot but do nothing else.
    if (body.b_name) {
      return NextResponse.json({ success: true });
    }
    // --- END SPAM CHECK ---

    let subject = '';
    let htmlContent = '';
    let toEmail = '';
    let replyTo = '';

    // Process request based on the form type
    switch (body.formType) {
      case 'kickoff':
        if (!body.name || !body.email || !body.project_details) {
          return NextResponse.json({ error: 'Missing required fields for kickoff form.' }, { status: 400 });
        }
        toEmail = 'my-3day-website@vispaico.com';
        subject = `New 3-Day Website Request from ${body.name}`;
        replyTo = body.email;
        htmlContent = `
          <h3>You have a new project request!</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Project Details:</strong></p>
          <p>${body.project_details.replace(/\n/g, '<br>')}</p>
        `;
        break;

      case 'contact':
        if (!body.name || !body.email || !body.message) {
          return NextResponse.json({ error: 'Missing required fields for contact form.' }, { status: 400 });
        }
        toEmail = 'hola@vispaico.com';
        subject = `New Contact Message from ${body.name}`;
        replyTo = body.email;
        htmlContent = `
          <h3>New message from your contact form:</h3>
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
        subject = `New Newsletter Subscription: ${body.email}`;
        replyTo = body.email;
        htmlContent = `
          <h3>New subscriber!</h3>
          <p>The following email address has signed up for the newsletter:</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <hr>
          <p><i>Note: For a full newsletter system, you can use the Resend API to add this contact to an "Audience" list instead of just sending an email notification.</i></p>
        `;
        break;

      default:
        return NextResponse.json({ error: 'Invalid form type specified.' }, { status: 400 });
    }

    // Send the email using Resend with the dynamically set details
    const { error } = await resend.emails.send({
      from: `Vispaico Form <${FROM_EMAIL}>`,
      to: [toEmail],
      subject: subject,
      replyTo: replyTo,
      html: htmlContent,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}