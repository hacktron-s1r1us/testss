import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/dashboard" || pathname.startsWith("/api/me")) {
    const session = request.cookies.get("session")?.value;
    if (!session) {
      return new NextResponse("Forbidden — auth required", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/api/me"],
};
