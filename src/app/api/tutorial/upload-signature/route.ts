import crypto from 'node:crypto';

import { NextResponse } from 'next/server';

import { getRequiredServerEnv, getServerEnv } from '@/lib/env';

const buildSignature = (params: Record<string, string>, apiSecret: string) => {
  const paramEntries = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

  const stringToSign = paramEntries.map(([key, value]) => `${key}=${value}`).join('&');
  return crypto.createHash('sha1').update(stringToSign + apiSecret).digest('hex');
};

export async function POST() {
  try {
    const cloudName = getRequiredServerEnv('CLOUDINARY_CLOUD_NAME');
    const apiKey = getRequiredServerEnv('CLOUDINARY_API_KEY');
    const apiSecret = getRequiredServerEnv('CLOUDINARY_API_SECRET');
    const folder = getServerEnv('CLOUDINARY_UPLOAD_FOLDER') ?? 'vispaico-demo';

    const timestamp = Math.round(Date.now() / 1000);
    const signature = buildSignature({ folder, timestamp: String(timestamp) }, apiSecret);

    return NextResponse.json({ signature, timestamp, apiKey, cloudName, folder });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
