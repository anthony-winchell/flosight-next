"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useAuthGuard } from "@/lib/useAuthGuard";

type Lead = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDate: string;
  status: LeadStatus | null;
  createdAt: string;
};

export default function LeadsPage() {
  useAuthGuard();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const statusStyles: Record<LeadStatus, string> = {
    NEW: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    CONTACTED: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    IN_PROGRESS: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    COMPLETED: "bg-green-500/10 text-green-400 border-green-500/20",
    ARCHIVED: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await api.get("/api/admin/leads");
        setLeads(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, []);

  if (loading) {
    return <div className="text-muted-foreground">Loading leads...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Leads</h1>

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-card text-muted-foreground">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Service</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-border hover:bg-muted/30 transition"
              >
                <td className="p-3">{lead.fullName}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.projectType}</td>
                <td className="p-3">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={lead.status ?? "NEW"}
                    onChange={async (e) => {
                      const newStatus = e.target.value as LeadStatus;

                      try {
                        await api.patch(`/api/admin/leads/${lead.id}/status`, {
                          status: newStatus,
                        });

                        setLeads((prev) =>
                          prev.map((l) =>
                            l.id === lead.id ? { ...l, status: newStatus } : l,
                          ),
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    className="text-xs px-2 py-1 rounded border bg-background"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
