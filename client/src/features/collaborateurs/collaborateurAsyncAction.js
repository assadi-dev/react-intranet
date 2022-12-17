import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "../../services/utils";
import {
  fetchAll,
  fetchRandom,
  fetchOne,
  fetchAdd,
  fetchUpdate,
  fetchDelete,
} from "./fetchCollaborateurAPI";

// Action sur  les collaborateur et met a jour le reducer de maniere asynchrone

export const fetchAllCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchAll",
  async () => {
    try {
      const response = await fetchAll();
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchRandomCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchRandom",
  async () => {
    try {
      const response = await fetchRandom();
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchOneCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchOne",
  async (id) => {
    try {
      const response = await fetchOne(id);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchUpdateCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchUpdate",
  async (payload) => {
    const { id, data } = payload;
    try {
      const response = await fetchUpdate(id, data);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchDeleteCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchDelete",
  async (id) => {
    try {
      const response = await fetchDelete(id);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchFilterCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchFilterCollaborateurs",
  async (data) => {
    const { term, categorie, service } = data;

    try {
      const response = await fetchAll();

      let sendata = { data: response.data, term, categorie, service };
      return sendata;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const fetchAddCollaborateurAsync = createAsyncThunk(
  "collaborateurs/fetchAddCollaborateurs",
  async (data) => {
    try {
      const response = await fetchAdd(data);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
