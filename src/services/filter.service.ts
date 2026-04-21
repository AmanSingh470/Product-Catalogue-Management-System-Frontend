import api from "@/lib/axios";
import { filtersResponseSchema } from "@/lib/validations/filter.schema";

const FALLBACK = {
  data: {
    all: [],
    categories: [],
    segments: [],
    divisions: [],
    companies: [],
    contactPersons: [],
  },
};

export const getFilters = async () => {
  try {
    const res = await api.get("/get-filters");

    // content-type check
    const contentType = res.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return FALLBACK;
    }

    // HTML/string check
    if (typeof res.data === "string") {
      return FALLBACK;
    }

    // Zod validation
    return filtersResponseSchema.parse(res.data);

  } catch (err) {
    return FALLBACK;
  }
};