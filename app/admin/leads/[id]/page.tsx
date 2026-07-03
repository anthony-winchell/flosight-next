"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { api } from "@/lib/api";
import { useAuthGuard } from "@/lib/useAuthGuard";

import ContactCard from "@/components/admin/cards/ContactCard";
import ProjectCard from "@/components/admin/cards/ProjectCard";
import DescriptionCard from "@/components/admin/cards/DescriptionCard";
import StatusCard from "@/components/admin/cards/StatusCard";
import DangerZone from "@/components/admin/cards/DangerZone";

type Lead = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDate: string;
  projectDescription: string;
  projectLocation: string;
  projectBudget: string;
  status: LeadStatus;
  createdAt: string;
};

export default function LeadDetailPage() {
  useAuthGuard();

  const router = useRouter();
  const params = useParams();

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLead() {
      try {
        const res = await api.get(`/api/admin/leads/${params.id}`);
        setLead(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadLead();
  }, [params.id]);

  async function updateStatus(status: LeadStatus) {
    try {
      const res = await api.patch(`/api/admin/leads/${lead?.id}/status`, {
        status,
      });

      setLead(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteLead() {
    if (!lead) return;

    if (!confirm("Delete this lead permanently?")) return;

    try {
      await api.delete(`/api/admin/leads/${lead.id}`);

      router.push("/admin/leads");
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!lead) {
    return <div>Lead not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <button
        onClick={() => router.back()}
        className="text-sm text-primary hover:underline"
      >
        ← Back to Leads
      </button>

      <div>
        <h1 className="text-3xl font-bold">{lead.fullName}</h1>

        <p className="text-muted-foreground">
          Submitted {new Date(lead.createdAt).toLocaleString()}
        </p>
      </div>

      <ContactCard
        fullName={lead.fullName}
        email={lead.email}
        phone={lead.phone}
      />

      <ProjectCard
        projectType={lead.projectType}
        projectDate={lead.projectDate}
        projectLocation={lead.projectLocation}
        projectBudget={lead.projectBudget}
      />

      <DescriptionCard description={lead.projectDescription} />

      <StatusCard status={lead.status} createdAt={lead.createdAt}>
        <select
          value={lead.status}
          onChange={(e) => updateStatus(e.target.value as LeadStatus)}
          className="rounded-md border border-border bg-background px-3 py-2"
        >
          <option value="NEW">NEW</option>
          <option value="CONTACTED">CONTACTED</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="ARCHIVED">ARCHIVED</option>
        </select>
      </StatusCard>

      <DangerZone onDelete={deleteLead} />
    </div>
  );
}
