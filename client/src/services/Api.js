import axios from "axios";
import { SERVER_HOST } from "./const";
import { extractToken } from "./utils";

export const Api = axios.create({
  baseURL: SERVER_HOST,
  headers: { "Content-Type": "application/json" },
});

// Insertion du token dans header de l'inst Api avant d'executer une requete;
Api.interceptors.request.use(
  (request) => {
    request.headers.Accept = "application/json";
    request.headers.Authorization = `Bearer ${extractToken()}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const Login_API = axios.create({ baseURL: SERVER_HOST + "/login" });
