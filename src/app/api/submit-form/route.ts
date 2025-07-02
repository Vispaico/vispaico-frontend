// File: app/api/submit-form/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface SubmitFormRequestBody {
  name: string;
  email: string;
  project_details: string;
}

// Instantiate Resend with the API key from your environment variables
const FROM_EMAIL = 'my-3day-website@vispaico.com';
const TO_EMAIL = 'my-3day-website@vispaico.com';

export async function POST(req: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json({ error: 'Server configuration error: RESEND_API_KEY is not set.' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    // Parse the request body
    const { name, email, project_details }: SubmitFormRequestBody = await req.json();

    // Basic validation to ensure all fields are present
    if (!name || !email || !project_details) {
      return NextResponse.json({ error: 'Please fill out all required fields.' }, { status: 400 });
    }

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: `Vispaico 3-Day Project <${FROM_EMAIL}>`, // A user-friendly "from" name
      to: [TO_EMAIL],
      subject: `New 3-Day Website Request from ${name}`,
      replyTo: email, // This makes it easy to reply directly to the customer
      html: `
        <h3>You have a new project request!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Project Details:</strong></p>
        <p>${project_details.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Handle potential errors from the Resend API
    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
    }

    // Send a success response back to the frontend
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}