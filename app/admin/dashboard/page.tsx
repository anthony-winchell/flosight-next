"use client";
import LeadsPage from "../leads/page";
import { useAuthGuard } from "@/lib/useAuthGuard";

export default function DashboardPage() {
  useAuthGuard();
  return (
    <div>
      <LeadsPage />
    </div>
  );
}
