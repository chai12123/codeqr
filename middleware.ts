import { NextResponse, type NextRequest } from "next/server";
import { safeAdminNextParam } from "@/lib/auth/redirect";
import { forwardAuthCookies, updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    if (!user) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      const redirect = NextResponse.redirect(loginUrl);
      return forwardAuthCookies(response, redirect);
    }
  }

  if (pathname === "/login" && user) {
    const next =
      safeAdminNextParam(request.nextUrl.searchParams.get("next")) ??
      "/admin/dashboard";
    const redirect = NextResponse.redirect(new URL(next, request.url));
    return forwardAuthCookies(response, redirect);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
