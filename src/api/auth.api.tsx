import axios from "axios";
import type { iLogin, iMessage, iRegister, iUser } from "../interfaces";

const baseUrl = "http://localhost:3000/auth";

export async function login(dto: iLogin): Promise<iMessage> {
  const data = { ...dto };
  const url = baseUrl + "/login";
  return await axios.post(url, data, { withCredentials: true });
}

export async function register(dto: iRegister): Promise<{ data: iMessage }> {
  const data = { ...dto };
  const url = baseUrl + "/register";
  return await axios.post<iMessage>(url, data, { withCredentials: true });
}

export async function getCurrentUser(): Promise<{ data: iUser }> {
  const url = "http://localhost:3000/users/current";
  const user = await axios.get(url, { withCredentials: true });
  return user;
}

export async function logout(): Promise<iMessage> {
  const url = baseUrl + "/logout";
  return await axios.post(url, {}, { withCredentials: true });
}
