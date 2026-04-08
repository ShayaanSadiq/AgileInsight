import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { orgAuthApi } from "./organisation/authApiSlice";
import { managerAuthApi } from "./manager/authApiSlice.js";
import { projectApi } from "./manager/ProjectApiSlice.js";
import { orgProjectApi } from "./organisation/projectApiSlice.js";
import currOrgReducer from "./organisation/currOrg";
import currManagerReducer from "./manager/currManagerSlice.js";

const store = configureStore({
  reducer: {
    [orgAuthApi.reducerPath]: orgAuthApi.reducer,
    [managerAuthApi.reducerPath]: managerAuthApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [orgProjectApi.reducerPath]: orgProjectApi.reducer,
    currOrg: currOrgReducer,
    currManager: currManagerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orgAuthApi.middleware,
      managerAuthApi.middleware,
      projectApi.middleware,
      orgProjectApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
