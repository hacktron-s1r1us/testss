/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/login",
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: "/login",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/secret",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "default-src 'self'" },
          { key: "X-Custom-Security", value: "protected-by-config" },
        ],
      },
    ];
  },
};

export default nextConfig;
