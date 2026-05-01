import api from "@/lib/axios";
import { productsResponseSchema } from "@/lib/validations/product.schema";
import type { ProductsResponse } from "@/lib/validations/product.schema";
import qs from "qs";

const FALLBACK: ProductsResponse = {
  items: [],
  current_page: 1,
  hasMore: false,
};

type Filters = {
  search?: string;
  division?: number[];
  company?: number[];
  segment?: number[];
};

type Params = {
  page?: number;
  filters?: Filters;
};

export const getProducts = async ({ page = 1, filters = {} }: Params = {}) => {
  try {
    const res = await api.get("/get-products", {
      params: {
        page,
        ...(filters.search?.length && { search: filters.search }),
        ...(filters.division?.length && { division: filters.division }),
        ...(filters.company?.length && { company: filters.company }),
        ...(filters.segment?.length && { segment: filters.segment }),
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

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
