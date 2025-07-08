// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  const isMainDomain = /^(www\.)?vispaico\.com$|^localhost(:\d+)?$/.test(hostname);

  if (isMainDomain) {
    return NextResponse.next();
  }

  const subdomain = hostname.split('.')[0];

  url.pathname = `/_subdomains/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}