import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { orgAuthApi } from "./organisation/authApiSlice";

const store = configureStore({
  reducer: {
    orgAuth: orgAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orgAuthApi.middleware),
});

setupListeners(store.dispatch);

export default store;
