// app/(admin)/layout.tsx
"use client";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <Topbar />

          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
