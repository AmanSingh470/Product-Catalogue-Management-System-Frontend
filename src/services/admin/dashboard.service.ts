import api from "@/lib/axios";
import { filtersResponseSchema } from "@/lib/validations/filter.schema";
import dashboardData from "@/data/dashboard.json";

// const FALLBACK = {
//   data: {
//     all: [],
//     categories: [],
//     segments: [],
//     divisions: [],
//     companies: [],
//     contactPersons: [],
//   },
// };

// export const getDashboard = async () => {
//   try {
//     const res = await api.get("/get-dashboard/1");

//     // content-type check
//     const contentType = res.headers["content-type"] || "";
//     if (!contentType.includes("application/json")) {
//       return FALLBACK;
//     }

//     // HTML/string check
//     if (typeof res.data === "string") {
//       return FALLBACK;
//     }

//     // Zod validation
//     return filtersResponseSchema.parse(res.data);

//   } catch (err) {
//     return FALLBACK;
//   }
// };

export const getDashboard = async () => {
    return dashboardData; 
};
