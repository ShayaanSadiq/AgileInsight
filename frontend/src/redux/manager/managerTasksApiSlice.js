import { baseApi } from "../baseApi.js";

export const managerTaskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasksBySprintId: builder.query({
      query: (sprintId) => ({
        url: `managers/tasks/${sprintId}`,
      }),
    }),
  }),
});

export const { useGetTasksBySprintIdQuery } = managerTaskApi;
