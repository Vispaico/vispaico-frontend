import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error('JWT_SECRET_KEY is not defined in environment variables.');
  }
  return new TextEncoder().encode(secret);
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Admin route protection
  if (pathname.startsWith('/admin_niels')) {
    const sessionCookie = request.cookies.get('session');
    const loginUrl = new URL('/admin_niels/login', request.url);

    // Allow access to login page itself
    if (pathname === '/admin_niels/login') {
      return NextResponse.next();
    }

    if (!sessionCookie) {
      console.log('Middleware: No session cookie, redirecting to login.');
      return NextResponse.redirect(loginUrl);
    }

    try {
      const secret = getJwtSecret();
      await jwtVerify(sessionCookie.value, secret);
      // If token is valid, proceed
      return NextResponse.next();
    } catch (err) {
      // If token is invalid, redirect to login
      console.error('Middleware: JWT Verification failed:', err);
      // Clear the invalid cookie
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('session');
      return response;
    }
  }
  
  // Skip rewrite for API routes, but allow middleware to run for auth
  if (pathname.startsWith('/api/')) {
      return NextResponse.next();
  }

  // Skip middleware for static assets
  if (pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js)$/)) {
    return NextResponse.next();
  }

  // Subdomain routing logic
  const isMainDomain = /^(www\.)?vispaico\.com$|^localhost(:\d+)?$/.test(hostname);

  if (isMainDomain) {
    return NextResponse.next();
  }

  const subdomain = hostname.split('.')[0].split(':')[0];

  if (hostname === 'go.vispaico.com' && pathname === '/') {
    return NextResponse.redirect(new URL('/quiz', request.url));
  }

  // Rewrite the path to the subdomain folder
  url.pathname = `/subdomains/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
