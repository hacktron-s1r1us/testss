import { ProfileDetails } from "./details";

async function loadUserProfile(user: string) {
  await new Promise((r) => setTimeout(r, 40));
  return { user, role: user === "alice" ? "admin" : "viewer", lastLogin: Date.now() };
}

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ user?: string }>;
}) {
  const params = await searchParams;
  const user = params.user ?? "unknown";

  const profile = await loadUserProfile(user);

  return (
    <main>
      <h1>User Profile</h1>
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: 12, marginTop: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <p>Username: <strong>{user}</strong></p>
        <p>Role: {profile.role}</p>
      </div>
      <ProfileDetails serverUser={user} />
    </main>
  );
}
