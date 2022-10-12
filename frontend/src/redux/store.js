import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/pleyerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
