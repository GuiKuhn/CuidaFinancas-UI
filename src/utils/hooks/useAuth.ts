import { useState } from "react";
import { login, register as apiRegister } from "../api/api";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(username, password);
      if (data.error) {
        setError(data.error);
        return;
      }
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("username", data.username);
      return data;
    } catch (err) {
      setError("Internal error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (
    username: string,
    password: string,
    name: string,
    balance: number,
    totalIncome: number
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await apiRegister(
        username,
        password,
        name,
        balance,
        totalIncome
      );
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("username", data.username);
      return data;
    } catch (err) {
      setError("Failed to register");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, handleRegister, isLoading, error };
};
