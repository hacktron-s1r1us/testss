import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Config Bypass PoC</title>
      </Head>
      <h1>Config Bypass PoC</h1>
      <p>This app has next.config.js rules:</p>
      <ul>
        <li><strong>Redirect:</strong> /admin → /login (307)</li>
        <li><strong>Headers:</strong> /secret gets X-Frame-Options, CSP, X-Custom-Security</li>
      </ul>
      <nav>
        <Link href="/admin">Admin (should redirect)</Link>{" | "}
        <Link href="/secret">Secret (should have security headers)</Link>{" | "}
        <Link href="/login">Login</Link>
      </nav>
    </>
  );
}
