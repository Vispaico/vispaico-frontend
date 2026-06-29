import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let email: string;
    let b_name: string | undefined;

    if (contentType.includes('application/json')) {
      const body = await req.json();
      email = body.email;
      b_name = body.b_name;
    } else {
      const formData = await req.formData();
      email = formData.get('email') as string;
      b_name = formData.get('b_name') as string | undefined;
    }

    if (b_name) {
      return NextResponse.json({ success: true });
    }

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    await resend.emails.send({
      from: 'Vispaico Newsletter <hola@vispaico.com>',
      to: ['newsletter@vispaico.com'],
      subject: 'New Newsletter Signup',
      html: `<p>${email} has signed up for the newsletter.</p>`,
    });

    if (contentType.includes('application/json')) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.redirect(new URL('/?newsletter=success', req.url));
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}
