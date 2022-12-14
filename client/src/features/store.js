import { configureStore } from "@reduxjs/toolkit";
import collaborateurReducer from "../features/collaborateurs/collaborateurSlice";

export const store = configureStore({
  reducer: {
    collaborateur: collaborateurReducer,
  },
});
