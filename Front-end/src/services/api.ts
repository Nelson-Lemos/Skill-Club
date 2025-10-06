// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://skillclub-backend.onrender.com",
  timeout: 40000,
});

export default api;
