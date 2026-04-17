import { baseApi } from "../baseApi.js";

export const managerSprintApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSprint: builder.mutation({
      query: (data) => ({
        url: "sprints/create",
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          projectId: data.projectId,
          startDate: data.startDate,
          endDate: data.endDate,
        }),
      }),
    }),
  }),
});

export const { usePostSprintMutation } = managerSprintApi;
