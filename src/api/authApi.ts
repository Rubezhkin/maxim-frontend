import { api } from "./axios";
import { IAuthResponse } from "../models/IAuthResponse";
import { IRefreshRequest } from "../models/IRefreshRequest";

export const login = (login: string, password: string) => {
  return api.post<IAuthResponse>("/auth/login", {
    login,
    password,
  });
};

export const register = (login: string, password: string) => {
  return api.post<IAuthResponse>("/auth/registration", {
    login,
    password,
  });
};

export const refresh = () => {
  return api.post<IRefreshRequest>("/auth/refresh");
};

export const logout = () => {
  return api.post<void>("/auth/logout");
};
