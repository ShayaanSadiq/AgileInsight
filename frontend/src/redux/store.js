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
    orgAuth: orgAuthApi.reducer,
    managerAuth: managerAuthApi.reducer,
    managerProjectApi: projectApi.reducer,
    orgProjectApi: orgProjectApi.reducer,
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
