"use client";

import { useSearchParams, usePathname } from "next/navigation";

export function ProfileDetails({ serverUser }: { serverUser: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentUser = searchParams.get("user") ?? "unknown";

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: 12, marginTop: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h3 style={{ margin: "0 0 0.75rem" }}>Session Details</h3>
      <p>Current user: <strong>{currentUser}</strong></p>
      <p>Path: {pathname}</p>
    </div>
  );
}
