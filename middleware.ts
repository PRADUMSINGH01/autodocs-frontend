import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get('host') || '';
  const path = url.pathname;

  // 1. Skip middleware for static files, API routes, etc.
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/static') ||
    path.includes('.') // matches favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // 2. Custom Domain Logic
  // Check if the request is NOT coming from our main domain or localhost
  const isMainDomain = host === 'shipquill.ink' || host === 'www.shipquill.ink' || host.includes('localhost');
  
  if (!isMainDomain) {
    // This is a custom domain (e.g., docs.client.com)
    // We rewrite the request to an internal route that handles custom domains
    // Example: /docs/docs.client.com/original-path
    return NextResponse.rewrite(new URL(`/docs/${host}${path}`, request.url));
  }

  // 3. Auth Protection for Dashboard
  if (path.startsWith('/dashboard')) {
    const token = request.cookies.get('shipquill_token')?.value;

    if (!token) {
      // Redirect to login if trying to access dashboard without a token
      const loginUrl = new URL('/login', request.url);
      // Optional: add a redirect parameter to return here after login
      loginUrl.searchParams.set('callbackUrl', path);
      return NextResponse.redirect(loginUrl);
    }
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
