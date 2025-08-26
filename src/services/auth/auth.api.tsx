import axios from "axios";
import type { iLogin, iMessage, iRegister, iUser } from "./interfaces";

const baseUrl = "http://localhost:3000/auth";

export async function login(dto: iLogin):Promise<iMessage> {
  const data = { ...dto };
  const url = baseUrl + "/login";
  return await axios.post(url, data, { withCredentials: true });
}

export async function register(dto: iRegister):Promise<iMessage> {
  const data = { ...dto };
  const url = baseUrl + "/register";
  return await axios.post(url, data , { withCredentials: true });
}

async function getCurrentUser(): Promise<iUser> {
  const url = baseUrl + "/current";
  return await axios.get(url, { withCredentials: true });
}

const api = {
  getCurrentUser,
  register,
  login,
};

export default api;
