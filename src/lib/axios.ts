import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const api = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;