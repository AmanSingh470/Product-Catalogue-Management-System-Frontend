import { z } from "zod";

// Common reusable schema
const basicItem = z.object({
  id: z.number(),
  name: z.string(),
  total_products: z.number(),
});

// Division (has extra fields)
const divisionItem = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  total_products: z.number(),
});

// Full response schema
export const filtersResponseSchema = z.object({
  data: z.object({
    all: z.array(divisionItem),
    categories: z.array(basicItem),
    segments: z.array(basicItem),
    divisions: z.array(basicItem),
    companies: z.array(basicItem),
    contactPersons: z.array(basicItem),
  }),
});

export type FiltersResponse = z.infer<typeof filtersResponseSchema>;