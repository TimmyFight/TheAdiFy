import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/pleyerSlice";
import { shazamCoreApi } from "./services/shazamCoreApi";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
