import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.next();
}

// No matcher — in Next.js this means middleware runs on ALL routes including /api
