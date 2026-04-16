import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { orgAuthApi } from "./organisation/authApiSlice";
import { managerAuthApi } from "./manager/authApiSlice.js";
import { projectApi } from "./manager/ProjectApiSlice.js";
import { orgProjectApi } from "./organisation/projectApiSlice.js";
import { userAuthApi } from "./user/authApiSlice.js";
import { managerMembersApi } from "./manager/membersApiSlice.js";
import { managerSprintApi } from "./manager/sprintApiSlice.js";
import currOrgReducer from "./organisation/currOrg";
import currManagerReducer from "./manager/currManagerSlice.js";
import currUserReducer from "./user/currUserSlice.js";

const store = configureStore({
  reducer: {
    [orgAuthApi.reducerPath]: orgAuthApi.reducer,
    [managerAuthApi.reducerPath]: managerAuthApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [orgProjectApi.reducerPath]: orgProjectApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [managerMembersApi.reducerPath]: managerMembersApi.reducer,
    [managerSprintApi.reducerPath]: managerSprintApi.reducer,
    currOrg: currOrgReducer,
    currManager: currManagerReducer,
    currUser: currUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orgAuthApi.middleware,
      managerAuthApi.middleware,
      projectApi.middleware,
      orgProjectApi.middleware,
      userAuthApi.middleware,
      managerMembersApi.middleware,
      managerSprintApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
