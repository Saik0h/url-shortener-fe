import type { iMessage, iUrlResponse } from "../interfaces";
import http from "./axios.config";

export async function shorten(url: string): Promise<{ data: iUrlResponse }> {
  return await http.post("/u", { url });
}

export async function del(id: string): Promise<iMessage> {
  const url = "/u/" + id;
  return await http.delete(url);
}
