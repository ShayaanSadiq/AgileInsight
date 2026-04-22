import { baseApi } from "../baseApi.js";

export const managerTaskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasksBySprintId: builder.query({
      query: (sprintId) => ({
        url: `managers/tasks/${sprintId}`,
      }),
      providesTags: ["Tasks"],
    }),

    postTask: builder.mutation({
      query: (data) => ({
        url: "tasks/create",
        method: "POST",
        body: JSON.stringify({ ...data }),
      }),
      invalidatesTags: ["Tasks"],
    }),

    patchTask: builder.mutation({
      query: ({ taskId, modifiedData }) => ({
        url: `tasks/update/${taskId}`,
        method: "PATCH",
        body: JSON.stringify({ ...modifiedData }),
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksBySprintIdQuery,
  usePostTaskMutation,
  usePatchTaskMutation,
} = managerTaskApi;
