import api from "@/lib/axios";

export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const getProduct = async (id: number) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const createProduct = async (data: any) => {
  const res = await api.post("/products", data);
  return res.data;
};

export const updateProduct = async (id: number, data: any) => {
  const res = await api.put(`/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id: number) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};