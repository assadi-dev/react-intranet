import axios from "axios";
import { SERVER_HOST } from "./const";

export const Api = axios.create({
  baseURL: SERVER_HOST,
  headers: { "Content-Type": "application/json" },
});

export const Login_API = axios.create({ baseURL: SERVER_HOST + "/login" });
