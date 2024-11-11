import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = ['/signin', '/signup'].includes(path); // Public routes
    const isProtectedPath = ['/admin'].includes(path); // Protected routes
    const token = request.cookies.get('accessToken')?.value || '';
    if (isPublicPath && token) return NextResponse.redirect(new URL('/', request.nextUrl));
    if (isProtectedPath && !token) return NextResponse.redirect(new URL('/signin', request.nextUrl));
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/admin',
        '/signin',
        '/signup'
    ]
};
