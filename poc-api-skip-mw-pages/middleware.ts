import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!auth || auth !== "Bearer valid-token") {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.next();
}

// No matcher — Next.js runs middleware on ALL routes including /api.
// vinext Pages Router silently skips /api routes.
