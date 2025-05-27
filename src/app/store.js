import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import  tokenSlice  from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: tokenSlice,
  },
});

setupListeners(store.dispatch);
