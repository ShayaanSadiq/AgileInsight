import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgProjectApi = createApi({
  reducerPath: "orgProjectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/organisations/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getProjectsById: builder.query({
      query: (id) => ({
        url: `projects/${id}`,
      }),
    }),

    getProjectById: builder.query({
      query: (projectId) => ({
        url: `/project/${projectId}`,
      }),
    }),
  }),
});

export const {
  useGetProjectsByIdQuery,
  usePostCreateProjectMutation,
  useGetProjectByIdQuery,
} = orgProjectApi;
