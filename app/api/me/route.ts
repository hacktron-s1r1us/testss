import { headers } from "next/headers";

async function getCurrentUserProfile(): Promise<{
  userId: string;
  token: string;
}> {
  "use cache: private";

  const h = await headers();
  const userId = h.get("x-user-id") ?? "anonymous";

  return {
    userId,
    token: `tok-${userId}-${Math.random().toString(36).slice(2, 8)}`,
  };
}

async function validateSession(_userId: string) {
  await new Promise((r) => setTimeout(r, 15));
  return true;
}

export async function GET(request: Request) {
  const requestedBy = request.headers.get("x-user-id") ?? "anonymous";

  await validateSession(requestedBy);

  const profile = await getCurrentUserProfile();

  return Response.json({
    userId: profile.userId,
    token: profile.token,
    timestamp: Date.now(),
  });
}
