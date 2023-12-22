import { NextRequest, NextResponse } from "next/server";

const protectedRouters = ["/"];

export function middleware(request: NextRequest) {
  const isLogged = false;
  if (protectedRouters.includes(request.nextUrl.pathname) && !isLogged) {
    const response = NextResponse.redirect(
      new URL("/login", request.nextUrl.origin),
    );
    return response;
  }
}
