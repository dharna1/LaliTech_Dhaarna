import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
});

export const createProduct = (productData) => api.post("/", productData);
export const getProducts = (params = {}) => api.get("/", { params });
export const getSingleProduct = (id) => api.get(`/${id}`);
export const updateProduct = (id, updatedData) => api.put(`/${id}`, updatedData);
export const deleteProduct = (id) => api.delete(`/${id}`);

export const loginUser = (credentials) => authApi.post("/login", credentials);
export const registerUser = (userData) => authApi.post("/register", userData);
