"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useAuthGuard } from "@/lib/useAuthGuard";
import { useRouter } from "next/navigation";

type Lead = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDate: string;
  status: LeadStatus;
  createdAt: string;
};

export default function LeadsPage() {
  useAuthGuard();
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");

  const statusStyles: Record<LeadStatus, string> = {
    NEW: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    CONTACTED: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    IN_PROGRESS: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    COMPLETED: "bg-green-500/10 text-green-400 border-green-500/20",
    ARCHIVED: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };

  const projectTypes: Record<string, string> = {
    AERIAL_PHOTOGRAPHY_VIDEOGRAPHY: "Aerial Photography & Videography",
    INSPECTION_AND_SURVEY: "Inspection & Survey",
    THREE_DIMENSIONAL_RENDERING: "3D Rendering",
    FPV_SCOUTING: "FPV Scouting",
    OTHER: "Other",
  }

  useEffect(() => {
    async function fetchLeads() {
      try {
        const url =
          statusFilter === "ALL"
            ? "/api/admin/leads"
            : `/api/admin/leads?status=${statusFilter}`;

        const res = await api.get(url);

        setLeads(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, [statusFilter]);

  if (loading) {
    return <div className="text-muted-foreground">Loading leads...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leads</h1>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as LeadStatus)}
          className="rounded-md border border-border bg-background px-3 py-2"
        >
          <option value="ALL">All Leads</option>
          <option value="NEW">New</option>
          <option value="CONTACTED">Contacted</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      <div className="border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm">
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
                  onClick={() => {
                    router.push(`/admin/leads/${lead.id}`);
                  }}
                  className="cursor-pointer border-t border-border hover:bg-muted/30 transition"
                >
                  <td className="p-3">{lead.fullName}</td>
                  <td className="p-3">{lead.email}</td>
                  <td className="p-3">{projectTypes[lead.projectType]}</td>
                  <td className="p-3">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      onClick={(e) => e.stopPropagation()}
                      value={lead.status ?? "NEW"}
                      onChange={async (e) => {
                        const newStatus = e.target.value as LeadStatus;

                        try {
                          await api.patch(
                            `/api/admin/leads/${lead.id}/status`,
                            {
                              status: newStatus,
                            },
                          );

                          setLeads((prev) =>
                            prev.map((l) =>
                              l.id === lead.id
                                ? { ...l, status: newStatus }
                                : l,
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
      <table className="w-full text-sm"></table>
    </div>
  );
}
