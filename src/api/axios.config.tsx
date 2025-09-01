import axios from "axios";

const http = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});


export default http;
