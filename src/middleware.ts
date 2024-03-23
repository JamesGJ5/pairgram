import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
        // TODO: redirect to the below only if not signed in
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/',
}
