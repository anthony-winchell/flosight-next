import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),

  projectDate: z.string().min(1),

  projectType: z.enum([
   " AERIAL_PHOTOGRAPHY_VIDEOGRAPHY",
    "INSPECTION_AND_SURVEY",
    "THREE_DIMENSIONAL_RENDERING",
    "FPV_SCOUTING",
    "OTHER",
  ]),

  projectDescription: z.string().min(10),

  projectLocation: z.string().min(2),

  projectBudget: z.string().min(1),

});

export type LeadFormData = z.infer<typeof leadSchema>;