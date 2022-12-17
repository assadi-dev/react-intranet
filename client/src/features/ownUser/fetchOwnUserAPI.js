import { Api } from "../../services/Api";

export function fetchOwnerUser(id) {
  return Api.get(`/api/collaborateurs/${id}`);
}

export function fetchUpdateOwnerUser(id, data) {
  return Api.put(`/api/collaborateurs/${id}`, data);
}
