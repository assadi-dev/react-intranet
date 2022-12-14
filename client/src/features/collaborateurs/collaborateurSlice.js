import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./fetchCollaborateur";

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

const initialState = {
  all: [],
  random: [],
  selected: [],
  errors: [],
  status: "idle",
};

export const collaborateurSlice = createSlice({
  name: "collaborateurs",
  initialState,
  reducers: {
    getAllCollaborateurs: (state, action) => {
      state.all = action.payload;
    },
    getError: (state, action) => {
      state.errors = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCollaborateurAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCollaborateurAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.all = action.payload;
      })
      .addCase(fetchAllCollaborateurAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload;
      });
  },
});

export const { getAllCollaborateurs, getError } = collaborateurSlice.actions;

export default collaborateurSlice.reducer;
