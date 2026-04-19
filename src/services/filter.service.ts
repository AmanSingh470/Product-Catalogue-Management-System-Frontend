import api from "@/lib/axios";

export const getFilters = async () => {
  const res = await api.get("/get-filters");  
  return res.data;
};

export const getFilter = async (id: number) => {
  const res = await api.get(`/filters/${id}`);
  return res.data;
};

export const createFilter = async (data: any) => {
  const res = await api.post("/filters", data);
  return res.data;
};

export const updateFilter = async (id: number, data: any) => {
  const res = await api.put(`/filters/${id}`, data);
  return res.data;
};

export const deleteFilter = async (id: number) => {
  const res = await api.delete(`/filters/${id}`);
  return res.data;
};