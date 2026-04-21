import api from "@/lib/axios";
import { productsResponseSchema } from "@/lib/validations/product.schema";

const FALLBACK = { data: [] };

export const getProducts = async () => {
  try {
    const res = await api.get("/get-products");

    //  1. content-type check
    const contentType = res.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return FALLBACK;
    }

    //  2. HTML/string check
    if (typeof res.data === "string") {
      return FALLBACK;
    }

    //  3. Zod validation
    return productsResponseSchema.parse(res.data);
    
  } catch (err) {
    return FALLBACK;
  }
};