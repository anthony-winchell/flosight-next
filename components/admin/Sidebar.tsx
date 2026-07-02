"use client";

import Link from "next/link";
import { LayoutDashboard, ClipboardList, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-border bg-card">
      <div className="p-8 border-b border-border">
        <h2 className="text-xl font-bold">
          FloSight
          <span className="text-primary"> Admin</span>
        </h2>
      </div>

      <nav className="flex flex-col p-4 gap-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-accent transition"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/admin/leads"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-accent transition"
        >
          <ClipboardList size={18} />
          Leads
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-accent transition"
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>

      <div className="mt-auto p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-500/10 text-red-400 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
