export default function HomePage() {
  return (
    <main>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Acme Financial Portal</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Welcome to your internal financial management platform.</p>

      <section style={{ background: "#fff", borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem" }}>Quick Links</h2>
        <ul style={{ lineHeight: 2, paddingLeft: "1.2rem" }}>
          <li><a href="/dashboard">Dashboard</a> — view your account overview</li>
          <li><a href="/profile?user=alice">Profile (Alice)</a> — user profile page</li>
          <li><a href="/profile?user=bob">Profile (Bob)</a> — user profile page</li>
        </ul>
      </section>

      <section style={{ background: "#fff", borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem" }}>API Endpoints</h2>
        <ul style={{ lineHeight: 2, paddingLeft: "1.2rem" }}>
          <li><a href="/api/whoami">GET /api/whoami</a> — current session info</li>
          <li><a href="/api/me">GET /api/me</a> — cached account data</li>
          <li><a href="/api/cached-profile">GET /api/cached-profile</a> — profile with remote lookup</li>
        </ul>
      </section>
    </main>
  );
}
