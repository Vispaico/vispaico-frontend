// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // This regex matches vispaico.com, www.vispaico.com, and any Vercel deployment URL.
  // It ensures the main site works on both production and preview deployments.
  const isMainDomain = /^(www\.)?vispaico\.com$|vercel\.app$/.test(hostname);

  if (isMainDomain) {
    // This is a request for the main site. Do nothing.
    return NextResponse.next();
  }

  // It's a subdomain. Get the subdomain part (e.g., 'go' from 'go.vispaico.com')
  const subdomain = hostname.split('.')[0];

  // Rewrite the URL to the special _subdomains folder
  // Example: go.vispaico.com/quiz -> /_subdomains/go/quiz
  url.pathname = `/_subdomains/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

// This config ensures the middleware runs on every page request.
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}