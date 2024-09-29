import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { requestsReducer } from "./requests/requests.slice";

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
