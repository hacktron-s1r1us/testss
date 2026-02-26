import Head from "next/head";

export default function Secret() {
  return (
    <>
      <Head>
        <title>Secret Page</title>
      </Head>
      <h1>Secret Page</h1>
      <p>This page should have security headers (X-Frame-Options, CSP).</p>
      <p>Check response headers to verify they are present.</p>
    </>
  );
}
