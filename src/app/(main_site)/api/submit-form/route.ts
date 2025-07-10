// File: app/api/submit-form/route.ts (with added debugging)

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

const FROM_EMAIL = 'my-3day-website@vispaico.com';

export async function POST(req: NextRequest) {
  console.log('API route /api/submit-form was hit.'); // 1. Log that the function was called

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Server Error: RESEND_API_KEY is not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    const resend = new Resend(resendApiKey);

    const body: SubmitFormRequestBody = await req.json();
    console.log('Received form type:', body.formType); // 2. Log the form type

    if (body.b_name) {
      console.log('Honeypot field filled. Blocking spam submission.');
      return NextResponse.json({ success: true });
    }

    let subject = '';
    let htmlContent = '';
    let toEmail = '';
    let replyTo = '';

    switch (body.formType) {
      case 'kickoff':
        // ... (kickoff logic is fine)
        toEmail = 'my-3day-website@vispaico.com';
        subject = `New 3-Day Website Request from ${body.name}`;
        replyTo = body.email;
        htmlContent = `...`; // your kickoff html
        break;

      case 'contact':
        // ... (contact logic is fine)
        toEmail = 'hola@vispaico.com';
        subject = `New Contact Message from ${body.name}`;
        replyTo = body.email;
        htmlContent = `...`; // your contact html
        break;

      case 'newsletter':
        console.log('Processing newsletter submission for:', body.email); // 3. Confirm newsletter case is entered
        if (!body.email) {
          return NextResponse.json({ error: 'Email is required for newsletter signup.' }, { status: 400 });
        }
        toEmail = 'newsletter@vispaico.com';
        subject = `Vispaico Newsletter: New Subscription`;
        replyTo = body.email;
        htmlContent = `
            <h3>New Subscriber Added to Your List</h3>
            <p>The following user has subscribed to the newsletter on vispaico.com:</p>
            <p><strong>Email Address:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <hr>
            <p><i>This is an automated notification.</i></p>
        `;
        break;

      default:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.error('Invalid form type received:', (body as any).formType);
        return NextResponse.json({ error: 'Invalid form type specified.' }, { status: 400 });
    }

    console.log(`Attempting to send email for ${body.formType} to ${toEmail}`);

    // --- The most important debugging step ---
    const { data, error } = await resend.emails.send({
      from: `Vispaico Form <${FROM_EMAIL}>`,
      to: [toEmail],
      subject: subject,
      replyTo: replyTo,
      html: htmlContent,
    });

    // 4. Log the response from Resend
    if (error) {
      console.error('Resend returned an error:', error);
      return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
    }

    console.log('Resend reported success:', data);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('An internal server error occurred:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}