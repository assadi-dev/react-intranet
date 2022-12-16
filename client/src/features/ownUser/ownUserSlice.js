import { createSlice } from "@reduxjs/toolkit";

import { fetchUpdateOwnUserAsync } from "./ownUserAsyncAction";

const initialState = {
  me: [],
  error: [],
  status: "idle",
};

export const ownUserSlice = createSlice({
  name: "ownUser",
  initialState,
  reducers: {
    getOwnUser: (state, action) => {
      state.me = action.payload;
    },
    setLogged: (state) => {
      state.isLogged = true;
    },
    setLogout: (state) => {
      state.isLogged = false;
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateOwnUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUpdateOwnUserAsync.fulfilled, (state, action) => {
        state.status = "completed";
        state.me = action.payload;
        state.isLogged = true;
      });
  },
});

export const { getOwnUsers, getError, setLogged, setLogout } =
  ownUserSlice.actions;

//Selecteur helpers
/**
 *
 * Permet d'avoir acces au state qui contient les données de l'utilisateur connecté
 * @returns un tableau d'objets qui qui contient les infos de l'utilisateurs connectée
 */
export const getOwnUserData = (state) => state.ownUser.me;
export const errorsOwnUsers = (state) => state.ownUser.errors;
export const statusOwnUsers = (state) => state.ownUser.status;

export default ownUserSlice.reducer;
