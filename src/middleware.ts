// src/middleware.ts (The NEW, SIMPLIFIED version)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Use a regex to match your main domain and www, and also allow localhost
  const isMainDomain = /^(www\.)?vispaico\.com$|^localhost(:\d+)?$/.test(hostname);

  // If it's the main domain, do nothing. Let Next.js handle it normally.
  if (isMainDomain) {
    return NextResponse.next();
  }

  // It's a subdomain. Get the subdomain part (e.g., 'go' from 'go.vispaico.com')
  const subdomain = hostname.split('.')[0];

  // Rewrite the URL to the special _subdomains folder
  url.pathname = `/_subdomains/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

// The config remains the same
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}