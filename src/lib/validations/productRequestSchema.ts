import { z } from "zod";

export const productRequestSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  category_id: z.string().min(1, "Category is required"),
  company_id: z.string().min(1, "Company is required"),
  division_id: z.string().min(1, "Division is required"),
  segment_id: z.string().min(1, "Segment is required"),
  description: z.string().optional(),
});