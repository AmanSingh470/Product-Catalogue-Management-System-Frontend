import api from "@/lib/axios";
import { productsResponseSchema } from "@/lib/validations/product.schema";
import type { ProductsResponse } from "@/lib/validations/product.schema";

const FALLBACK: ProductsResponse = {
  items: [],
  current_page: 1,
  hasMore: false,
};

export const getProducts = async (page: number) => {
  try {
    const res = await api.get(`/get-products?page=${page}`);
    const contentType = res.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return FALLBACK;
    }

    if (typeof res.data === "string") {
      return FALLBACK;
    }

    return productsResponseSchema.parse(res.data);

  } catch (err) {
    return FALLBACK;
  }
};