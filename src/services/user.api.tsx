import axios from "axios";

const baseUrl = "http://localhost:3000/";

export async function getUserUrls() {
  const url = baseUrl + "u/user";
  const response = await axios.get(url, { withCredentials: true });
  console.log(response);
  return response;
}
