import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),

  category: z.string(),
  segment: z.string(),
  division: z.string(),

  company: z.string(),
  company_contact_person: z.string(),

  main_advantages: z.string().nullable(),
  key_facts: z.string().nullable(),
  applications: z.string().nullable(),

  status: z.enum(["active", "inactive"]),

  created_at: z.string(),
  image_url: z.string(),
});

export const productsResponseSchema = z.object({
  data: z.array(productSchema),
});

export type Product = z.infer<typeof productSchema>;