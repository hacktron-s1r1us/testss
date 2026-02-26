import { cookies } from "next/headers";
import { getUserBySession, getAccountBalance } from "../lib/db";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) {
    return (
      <main>
        <h1>Sign In Required</h1>
        <p style={{ color: "#666" }}>Please sign in to access your dashboard.</p>
      </main>
    );
  }

  const user = await getUserBySession(session);

  if (!user) {
    return (
      <main>
        <h1>Session Expired</h1>
        <p>Your session is no longer valid. Please sign in again.</p>
      </main>
    );
  }

  const balance = await getAccountBalance(user.id);

  return (
    <main>
      <h1>Dashboard</h1>
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: 12, marginTop: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ margin: 0 }}>Welcome, {user.name}</h2>
        <p style={{ color: "#666" }}>{user.email}</p>
        <p>Role: <strong>{user.role}</strong></p>
      </div>
      <div style={{ background: "#f0f9ff", padding: "1.5rem", borderRadius: 12, marginTop: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h3 style={{ margin: 0 }}>Account Balance</h3>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ${balance?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>SSN on file: {user.ssn}</p>
      </div>
    </main>
  );
}
