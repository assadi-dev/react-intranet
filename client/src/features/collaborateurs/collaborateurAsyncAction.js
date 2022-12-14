import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  async () => {
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
  async () => {
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
  async () => {
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
