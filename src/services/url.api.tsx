import type { iMessage, iUrlResponse } from "./interfaces";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function shorten(url: string): Promise<iUrlResponse> {
  const path = baseUrl + "/u";
  return await axios.post(path, { url }, { withCredentials: true });
}

export async function del(id: string): Promise<iMessage> {
  const url = baseUrl + "/u/" + id;
  return await axios.delete(url, { withCredentials: true });
}
