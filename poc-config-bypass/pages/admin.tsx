import Head from "next/head";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <h1>ADMIN PANEL — SENSITIVE CONTENT</h1>
      <p>You should NOT see this if next.config.js redirects are working.</p>
      <p>Secret API key: sk_live_FAKE_KEY_12345</p>
      <p>Database password: super_secret_db_pass</p>
    </>
  );
}
