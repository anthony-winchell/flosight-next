// app/(admin)/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/api/auth/login", {
        username,
        password,
      });

      const token = res.data.token;

      // store JWT (simple version for now)
      localStorage.setItem("token", token);

      router.push("/admin/leads");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-xl border border-border bg-card">
        <h1 className="text-3xl font-bold mb-4">FloSight</h1>
        <h2 className="text-xl font-bold mb-6">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full p-3 rounded-md bg-background border border-border"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-md bg-background border border-border"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full bg-primary text-black font-semibold py-3 rounded-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-red-400 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
