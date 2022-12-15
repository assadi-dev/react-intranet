import { createSlice } from "@reduxjs/toolkit";

import {
  fetchAllCollaborateurAsync,
  fetchOneCollaborateurAsync,
  fetchRandomCollaborateurAsync,
} from "./collaborateurAsyncAction";

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
      })
      .addCase(fetchRandomCollaborateurAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomCollaborateurAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.random = action.payload;
      })
      .addCase(fetchRandomCollaborateurAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload;
      })
      .addCase(fetchOneCollaborateurAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOneCollaborateurAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.selected = action.payload;
      })
      .addCase(fetchOneCollaborateurAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload;
      });
  },
});

export const { getAllCollaborateurs, getError } = collaborateurSlice.actions;

//Selecteur helpers
/**
 *
 * Permet d'avoir acces au state qui contient tous les collaborateurs
 * @returns un tableau d'objets qui qui contient la listes des collaborateurs
 */
export const allCollaborateurs = (state) => state.collaborateur.all;
export const randomCollaborateurs = (state) => state.collaborateur.random;
export const selectedCollaborateurs = (state) => state.collaborateur.selected;
export const errorsCollaborateurs = (state) => state.collaborateur.errors;
export const statusCollaborateurs = (state) => state.collaborateur.status;

export default collaborateurSlice.reducer;
