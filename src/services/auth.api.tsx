import axios from "axios";
import type { iLogin, iMessage, iRegister, iUser } from "./interfaces";

const baseUrl = "http://localhost:3000/auth";

export async function login(dto: iLogin): Promise<iMessage> {
  const data = { ...dto };
  const url = baseUrl + "/login";
  return await axios.post(url, data, { withCredentials: true });
}

export async function register(dto: iRegister): Promise<iMessage> {
  const data = { ...dto };
  const url = baseUrl + "/register";
  const res = await axios.post<iMessage>(url, data, { withCredentials: true });
  console.log(res);
  return res as any as iMessage
}

export async function getCurrentUser(): Promise<{ data: iUser }> {
  const url = "http://localhost:3000/users/current"
  const user = await axios.get(url, { withCredentials: true })
  console.log("Usuário:", user.data.name, "URLS:", user.data.urls)
  return user;
}

export async function logout(): Promise<iMessage> {
  const url = baseUrl + "/logout";
  return await axios.post(url, {}, { withCredentials: true });
}
