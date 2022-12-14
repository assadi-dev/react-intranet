import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./fetchCollaborateur";

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
  },
});

export const { getAllCollaborateurs } = collaborateurSlice.actions;

export default collaborateurSlice.reducer;
