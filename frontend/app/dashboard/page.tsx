"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>You are logged in ✅</p>
    </div>
  );
}