import { headers, cookies } from "next/headers";

export async function GET() {
  const h = await headers();
  const c = await cookies();

  const userId = h.get("x-user-id") ?? "anonymous";
  const sessionToken = c.get("session")?.value ?? "none";

  await new Promise((r) => setTimeout(r, 50));

  const h2 = await headers();
  const c2 = await cookies();

  const userIdAfter = h2.get("x-user-id") ?? "anonymous";
  const sessionAfter = c2.get("session")?.value ?? "none";

  return Response.json({
    userId: userIdAfter,
    session: sessionAfter,
    timestamp: Date.now(),
  });
}
