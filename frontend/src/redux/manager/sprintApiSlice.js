import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const managerSprintApi = createApi({
  reducerPath: "managerSprintApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/sprints/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postSprint: builder.mutation({
      query: (data) => ({
        url: "create",
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
