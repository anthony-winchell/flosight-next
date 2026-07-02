"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/lib/api";
import { LeadFormData, leadSchema } from "@/lib/validators/contact";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const inputClass =
    "w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";

  async function onSubmit(data: LeadFormData) {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      await api.post("/api/leads", data);

      setSuccess(true);
      reset();
    } catch (err) {
      setError("Failed to send request. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Request a Consultation
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          Tell us about your project and we’ll get back to you within 24–48
          hours.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("fullName")}
                placeholder="Full Name"
                className={inputClass}
              />
              <input
                {...register("email")}
                placeholder="Email"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("phone")}
                placeholder="Phone"
                className={inputClass}
              />
              <input
                type="date"
                {...register("projectDate")}
                className={inputClass}
              />
            </div>

            <select {...register("projectType")} className={inputClass}>
              <option value="AERIAL_PHOTOGRAPHY_VIDEOGRAPHY">
                Aerial Photography / Videography
              </option>
              <option value="INSPECTION_AND_SURVEY">Inspection / Survey</option>
              <option value="THREE_DIMENSIONAL_RENDERING">3D Modeling</option>
              <option value="FPV_SCOUTING">FPV Scouting</option>
              <option value="OTHER">Other</option>
            </select>

            <textarea
              {...register("projectDescription")}
              placeholder="Project Description"
              className={inputClass + " min-h-[140px]"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("projectLocation")}
                placeholder="Location"
                className={inputClass}
              />
              <input
                {...register("projectBudget")}
                placeholder="Budget (e.g. $300)"
                className={inputClass}
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                ✓ Request sent successfully
              </p>
            )}

            {error && <p className="text-red-400 text-sm">{error}</p>}
          </form>

          {/* INFO PANEL */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>

            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>✓ We review your request within 24 hours</li>
              <li>✓ We contact you and review project requirements</li>
              <li>✓ We provide pricing + scheduling options</li>
              <li>✓ FAA Part 107 compliant operations</li>
              <li>✓ Fully insured drone services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
