// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  console.log('Middleware - Hostname:', hostname, 'Pathname:', url.pathname);

  if (url.pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js)$/)) {
    console.log('Middleware - Skipping static asset:', url.pathname);
    return NextResponse.next();
  }

  const isMainDomain = /^(www\.)?vispaico\.com$|^localhost(:\d+)?$/.test(hostname);

  if (isMainDomain) {
    console.log('Middleware - Main domain, passing through');
    return NextResponse.next();
  }

  const subdomain = hostname.split('.')[0].split(':')[0];
  console.log('Middleware - Subdomain:', subdomain);

  if (hostname === 'go.vispaico.com' && url.pathname === '/') {
    console.log('Middleware - Redirecting go.vispaico.com/ to /quiz');
    return NextResponse.redirect(new URL('/quiz', request.url));
  }

  const newPath = `/subdomains/${subdomain}${url.pathname}`;
  console.log('Middleware - Rewriting to:', newPath);
  url.pathname = newPath;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};