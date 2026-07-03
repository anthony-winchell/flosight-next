"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    localStorage.removeItem("token");
    router.push("/admin/login");
  }

  return (
    <aside className="w-38 min-h-screen flex flex-col justify-between border-r border-border bg-card">
      <div className="p-8 border-b border-border">
        <h2 className="text-xl font-bold">
          FloSight
          <span className="text-primary"> Admin</span>
        </h2>
      </div>

      <div className="mb-20">
        <button onClick={handleLogout} className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-500/10 text-red-400 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
