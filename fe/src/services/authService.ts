import api from "@/lib/axios";
// import { refresh } from "next/cache";

export const authService = {
  signOut: async () => {
    await api.post("/auth/logout");
  },
  signUp: async (
    username: string,
    password: string,
    email: string,
    displayName: string,
  ) => {
    const response = await api.post("/auth/signup", {
      username,
      password,
      email,
      displayName,
    });
    return response.data;
  },
  signIn: async (username: string, password: string) => {
    const response = await api.post("/auth/signin", { username, password });
    return response.data;
  },
  fetchMe: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },
  refresh: async () => {
    const response = await api.post("/auth/refresh");
    return response.data.accessToken;
  },
};
