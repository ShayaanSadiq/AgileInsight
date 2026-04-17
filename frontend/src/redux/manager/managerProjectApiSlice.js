import { baseApi } from "../baseApi.js";

export const managerProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjectsById: builder.query({
      query: (id) => ({
        url: `managers/projects/${id}`,
      }),
    }),

    getProjectById: builder.query({
      query: (projectId) => ({
        url: `managers/project/${projectId}`,
      }),
    }),
  }),
});

export const { useGetProjectsByIdQuery, useGetProjectByIdQuery } =
  managerProjectApi;
