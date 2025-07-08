// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  console.log('Hostname:', hostname, 'Pathname:', url.pathname); // Debug log

  const isMainDomain = /^(www\.)?vispaico\.com$|^localhost(:\d+)?$/.test(hostname);

  if (isMainDomain) {
    return NextResponse.next();
  }

  const subdomain = hostname.split('.')[0].split(':')[0]; // Handle ports if present

  // Redirect go.vispaico.com/ to /quiz
  if (hostname === 'go.vispaico.com' && url.pathname === '/') {
    console.log('Redirecting go.vispaico.com/ to /quiz');
    return NextResponse.redirect(new URL('/quiz', request.url));
  }

  // Rewrite to _subdomains folder
  url.pathname = `/_subdomains/${subdomain}${url.pathname}`;
  console.log('Rewriting to:', url.pathname); // Debug log

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};