import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = ['/signin', '/signup'].includes(path); // Public routes
  const isProtectedPath = ['/profile'].includes(path); // Protected routes
  const token = request.cookies.get('accessToken')?.value || '';

  if (isPublicPath && token) {
    // If the user has a token and is trying to access a public page, redirect to home
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (isProtectedPath && !token) {
    // If the user doesn't have a token and is trying to access a protected page, redirect to login
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }

  // If neither condition is met, continue as usual
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile',  // This is a protected path
    '/signin',    // This is a public path
    '/signup',   // This is a public path
  ],
};
