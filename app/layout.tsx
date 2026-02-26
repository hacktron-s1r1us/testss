export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Acme Financial</title>
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#fafafa" }}>
        <nav style={{
          background: "#1a1a2e",
          color: "#fff",
          padding: "0.75rem 2rem",
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          fontSize: "0.9rem",
        }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}>Acme Financial</a>
          <a href="/dashboard" style={{ color: "#aaa", textDecoration: "none" }}>Dashboard</a>
          <a href="/profile" style={{ color: "#aaa", textDecoration: "none" }}>Profile</a>
          <a href="/api/whoami" style={{ color: "#aaa", textDecoration: "none" }}>Session</a>
          <a href="/api/me" style={{ color: "#aaa", textDecoration: "none" }}>Account</a>
        </nav>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
