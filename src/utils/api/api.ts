import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  balance: number,
  totalIncome: number
) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
    balance,
    totalIncome,
  });
  return response.data;
};
