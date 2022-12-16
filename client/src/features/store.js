import { configureStore } from "@reduxjs/toolkit";
import collaborateurReducer from "../features/collaborateurs/collaborateurSlice";
import ownUserSliceReducer from "../features/ownUser/ownUserSlice";

export const store = configureStore({
  reducer: {
    collaborateur: collaborateurReducer,
    ownUser: ownUserSliceReducer,
  },
});
