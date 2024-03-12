import { NextRequest, NextResponse } from "next/server";
import { useEffect } from "react";
import { AuthService } from "./app/auth/services/auth-services";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const authService = new AuthService();
  const user = authService.getUser();
  if (authService.isTokenExpired() || !user) {
    const { pathname } = new URL(req.url);

    return NextResponse.redirect(
      new URL(`/login`, req.url)
    );
  }
}
