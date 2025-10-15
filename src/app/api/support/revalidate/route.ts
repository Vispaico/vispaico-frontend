import crypto from 'node:crypto';

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

import { getServerEnv } from '@/lib/env';

const SIGNATURE_HEADER = 'x-contentful-signature';
const FALLBACK_SECRET_HEADER = 'x-vispaico-secret';

const isSignatureValid = (payload: string, signature: string | null, secret: string) => {
  if (!signature) {
    return false;
  }
  const computed = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computed));
};

export async function POST(request: Request) {
  try {
    const secret = getServerEnv('CONTENTFUL_WEBHOOK_SECRET');
    if (!secret) {
      return NextResponse.json({ error: 'Webhook secret missing.' }, { status: 500 });
    }

    const rawBody = await request.text();
    const signature = request.headers.get(SIGNATURE_HEADER);
    const fallbackSecret = request.headers.get(FALLBACK_SECRET_HEADER);

    const signatureIsValid = signature ? isSignatureValid(rawBody, signature, secret) : false;
    const fallbackIsValid = !signature && fallbackSecret ? fallbackSecret === secret : false;

    if (!signatureIsValid && !fallbackIsValid) {
      return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 });
    }

    const path = '/subdomains/support-pages';
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
