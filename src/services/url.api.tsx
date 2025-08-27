import axios from "axios";
import type { iUrl } from './interfaces'

const baseUrl = "http://localhost:3000";

export async function shortenURL(data: iUrl): Promise<{ data: string }> {
  const url = baseUrl + "/u";
  return await axios.post(url, data, { withCredentials: true });
}
