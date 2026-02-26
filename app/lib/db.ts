interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  balance: number;
  ssn: string;
}

const USERS: Record<string, UserProfile> = {
  "sess_admin_9f8a2b": {
    id: "usr_001",
    name: "Alice Chen",
    email: "alice@company.com",
    role: "admin",
    balance: 284_750.0,
    ssn: "***-**-7891",
  },
  "sess_user_3c7d1e": {
    id: "usr_002",
    name: "Bob Martinez",
    email: "bob@example.com",
    role: "user",
    balance: 12_340.5,
    ssn: "***-**-4523",
  },
  "sess_user_8k2m4p": {
    id: "usr_003",
    name: "Carol Williams",
    email: "carol@example.com",
    role: "user",
    balance: 67_890.25,
    ssn: "***-**-8834",
  },
};

export async function getUserBySession(
  sessionToken: string,
): Promise<UserProfile | null> {
  await new Promise((r) => setTimeout(r, 15));
  return USERS[sessionToken] ?? null;
}

export async function getAccountBalance(userId: string): Promise<number | null> {
  await new Promise((r) => setTimeout(r, 10));
  const entry = Object.values(USERS).find((u) => u.id === userId);
  return entry?.balance ?? null;
}
