import { baseApi } from "../baseApi.js";

export const managerProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getManagerProjectsById: builder.query({
      query: () => ({
        url: "managers/projects",
      }),
    }),

    getManagerProjectById: builder.query({
      query: (projectId) => ({
        url: `managers/project/${projectId}`,
      }),
    }),
  }),
});

export const { useGetManagerProjectsByIdQuery, useGetManagerProjectByIdQuery } =
  managerProjectApi;
