import { NextRequest, NextResponse } from "next/server";

const pathsForUsers = ['/', '/verification-email-notification', '/verified-notification', '/reset-password', '/settings'];

export function middleware(req: NextRequest) {
    if (pathsForUsers.includes(req.nextUrl.pathname)) {
        // TODO: redirect to the below only if not signed in
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: pathsForUsers,
}
