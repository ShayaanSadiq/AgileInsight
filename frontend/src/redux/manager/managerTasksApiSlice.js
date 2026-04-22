import { baseApi } from "../baseApi.js";

export const managerTaskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasksBySprintId: builder.query({
      query: (sprintId) => ({
        url: `managers/tasks/${sprintId}`,
      }),
    }),

    postTask: builder.mutation({
      query: (data) => ({
        url: "tasks/create",
        method: "POST",
        body: JSON.stringify({ ...data }),
      }),
    }),
  }),
});

export const { useGetTasksBySprintIdQuery, usePostTaskMutation } =
  managerTaskApi;
