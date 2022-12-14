import { Api } from "../../services/Api";

export function fetchAll() {
  return Api.get("/api/collaborateurs");
}
