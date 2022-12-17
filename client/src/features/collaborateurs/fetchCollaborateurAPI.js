import { Api } from "../../services/Api";

export function fetchAll() {
  return Api.get("/api/collaborateurs");
}

export function fetchRandom() {
  return Api.get("/api/collaborateurs/random");
}

export function fetchOne(id) {
  return Api.get(`/api/collaborateurs/${id}`);
}

export function fetchAdd(data) {
  return Api.post(`/api/collaborateurs`, data);
}

export function fetchUpdate(id, data) {
  return Api.put(`/api/collaborateurs/${id}`, data);
}

export function fetchDelete(id) {
  return Api.delete(`/api/collaborateurs/${id}`);
}
