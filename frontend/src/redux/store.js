import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./baseApi.js";
import currOrgReducer from "./organisation/currOrg";
import currManagerReducer from "./manager/currManagerSlice.js";
import currUserReducer from "./user/currUserSlice.js";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    currOrg: currOrgReducer,
    currManager: currManagerReducer,
    currUser: currUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
