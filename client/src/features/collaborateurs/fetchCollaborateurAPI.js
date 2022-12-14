import { Api } from "../../services/Api";
import { extractToken } from "../../services/utils";

const token = extractToken();

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

export function fetchAll() {
  return Api.get("/api/collaborateurs", { headers });
}

export function fetchRandom() {
  return Api.get("/api/collaborateurs/random", { headers });
}

export function fetchOne(id) {
  return Api.get(`/api/collaborateurs/${id}`, { headers });
}

export function fetchAdd(data) {
  return Api.post(`/api/collaborateurs`, data, { headers });
}

export function fetchUpdate(id, data) {
  return Api.put(`/api/collaborateurs/${id}`, data, { headers });
}

export function fetchDelete(id) {
  return Api.delete(`/api/collaborateurs/${id}`, { headers });
}
