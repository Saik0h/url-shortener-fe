import http from "./axios.config";
import type { iLogin, iMessage, iRegister, iUser } from "../interfaces";

export async function login(dto: iLogin): Promise<iMessage> {
  const data = { ...dto };
  return await http.post("auth/login", data);
}

export async function register(dto: iRegister): Promise<{ data: iMessage }> {
  const data = { ...dto };
  return await http.post<iMessage>("auth/register", data);
}

export async function getCurrentUser(): Promise<{ data: iUser }> {
  const user = await http.get("users/current");
  return user;
}

export async function logout(): Promise<iMessage> {
  return await http.post("auth/logout");
}
