import axios from "axios";
import type { iMessage, iUrl } from "./interfaces";

const baseUrl = "http://localhost:3000";

export async function shortenURL(data: iUrl): Promise<{ data: string }> {
  const url = baseUrl + "/u";
  return await axios.post(url, data, { withCredentials: true });
}

export async function deleteUrl(id: string): Promise<iMessage> {
  const url = baseUrl + "/u/" + id;
  return await axios.delete(url, { withCredentials: true });
}
