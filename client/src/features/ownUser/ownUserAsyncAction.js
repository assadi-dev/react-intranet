import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOwnerUser, fetchUpdateOwnerUser } from "./fetchOwnUserAPI";

export const fetchOwnUserAsync = createAsyncThunk(
  "ownUser/fetchOwnerUser",
  async (id) => {
    try {
      const response = await fetchOwnerUser(id);
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

export const fetchUpdateOwnUserAsync = createAsyncThunk(
  "ownUser/fetchUpdateOwnerUser",
  async (id, data) => {
    try {
      const response = await fetchUpdateOwnerUser(id, data);
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
