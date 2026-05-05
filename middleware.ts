import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that are ALWAYS allowed
  const isPublicPath =
    pathname === '/' ||
    pathname === '/waitlist' ||
    pathname.startsWith('/docs-preview') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/waitlist') || // Allow waitlist API if it's local
    pathname === '/favicon.ico';

  // If it's a login or register path, or dashboard, redirect to waitlist
  if (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/waitlist', request.url));
  }

  // For anything else not in public paths, redirect to waitlist
  if (!isPublicPath) {
    return NextResponse.redirect(new URL('/waitlist', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
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
};
