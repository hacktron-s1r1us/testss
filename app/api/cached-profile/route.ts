import { headers } from "next/headers";

export async function GET() {
  const h = await headers();
  const token = h.get("authorization") ?? "anonymous";

  const res = await fetch("https://httpbin.org/uuid", {
    headers: { Authorization: token },
    next: { tags: ["user-profile"] },
  });
  const data = await res.json();

  return Response.json({
    requestedBy: token,
    profileData: data,
    servedAt: Date.now(),
  });
}
