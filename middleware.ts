import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/admin"];

export function middleware(req:NextRequest){
    const {pathname} = req.nextUrl;

    if(protectedPaths.some(path => pathname.startsWith(path))){
        const token = req.cookies.get("admin-token");

        if(!token){
            const loginUrl = new URL("/admin/login", req.url);
            return NextResponse.redirect(loginUrl);
        }
    }
    return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};