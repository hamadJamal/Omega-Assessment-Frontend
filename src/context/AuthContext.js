import React, { createContext, useState } from "react";
import api from "../services/apiService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (username, password) => {
    const response = await api.post("/auth/login", { username, password });
    if (response.data.success) {
      localStorage.setItem("token", response.data.data.token);
      setToken(response.data.data.token);
    }
    return response.data;
  };

  const logout = async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("token");
    window.location.href = "/login";
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};
