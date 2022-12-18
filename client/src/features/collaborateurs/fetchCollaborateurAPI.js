import { Api } from "../../services/Api";

export function fetchAll(thunkApi) {
  return Api.get("/api/collaborateurs", { signal: thunkApi.signal });
}

export function fetchRandom(thunkApi) {
  return Api.get("/api/collaborateurs/random", { signal: thunkApi.signal });
}

export function fetchOne(id, thunkApi) {
  return Api.get(`/api/collaborateurs/${id}`, { signal: thunkApi.signal });
}

export function fetchAdd(data, thunkApi) {
  return Api.post(`/api/collaborateurs`, data, { signal: thunkApi.signal });
}

export function fetchUpdate(id, data, thunkApi) {
  return Api.put(`/api/collaborateurs/${id}`, data, {
    signal: thunkApi.signal,
  });
}

export function fetchDelete(id, thunkApi) {
  return Api.delete(`/api/collaborateurs/${id}`, { signal: thunkApi.signal });
}
