import { Api } from "../../services/Api";
import { extractToken } from "../../services/utils";

const token = extractToken();

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

export function fetchOwnerUser(id) {
  return Api.get(`/api/collaborateurs/${id}`, { headers });
}

export function fetchUpdateOwnerUser(id, data) {
  return Api.put(`/api/collaborateurs/${id}`, data, { headers });
}
