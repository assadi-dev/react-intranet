import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "../../services/utils";

import {
  fetchAllCollaborateurAsync,
  fetchDeleteCollaborateurAsync,
  fetchFilterCollaborateurAsync,
  fetchOneCollaborateurAsync,
  fetchRandomCollaborateurAsync,
} from "./collaborateurAsyncAction";

const initialState = {
  all: [],
  random: [],
  selected: [],
  errors: [],
  filterParam: { term: "", categorie: "nom", service: "" },
  status: "idle",
};

export const collaborateurSlice = createSlice({
  name: "collaborateurs",
  initialState,
  reducers: {
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
      })
      .addCase(fetchFilterCollaborateurAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilterCollaborateurAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let term = payload.term;
        let categorie = payload.categorie;
        let service = payload.service;
        let filteredState = payload.data;

        if (!isEmpty(term)) {
          state.filterParam.term = term;
        }
        if (!isEmpty(categorie)) {
          state.filterParam.categorie = categorie;
        }

        state.filterParam.service = service;

        if (state.filterParam.categorie == "nom") {
          filteredState = filteredState.filter(
            (collaborateur) =>
              collaborateur.firstname
                .toLowerCase()
                .includes(term.toLowerCase()) ||
              collaborateur.lastname.toLowerCase().includes(term.toLowerCase())
          );
        }

        if (state.filterParam.categorie == "localisation") {
          filteredState = filteredState.filter((collaborateur) =>
            collaborateur.city.toLowerCase().includes(term.toLowerCase())
          );
        }

        if (state.filterParam.service) {
          filteredState = filteredState.filter((collaborateur) =>
            collaborateur.service
              .toLowerCase()
              .includes(state.filterParam.service.toLowerCase())
          );
        }
        state.status = "completed";
        state.all = filteredState;
      })
      .addCase(fetchFilterCollaborateurAsync.rejected, (state) => {
        state.status = "rejected";
        state.errors = action.payload;
      })
      .addCase(fetchDeleteCollaborateurAsync.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(fetchDeleteCollaborateurAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let id = payload.collaborateur.id;
        let upDateList = state.all;
        state.all = upDateList.filter((collab) => collab.id != id);
        // state.status = "completed";
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
