import { baseApi } from "../baseApi.js";

export const orgProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjectsById: builder.query({
      query: () => ({
        url: "organisations/projects",
      }),
      providesTags: ["Projects"],
    }),

    getProjectById: builder.query({
      query: (projectId) => ({
        url: `organisations/project/${projectId}`,
      }),
    }),
  }),
});

export const { useGetProjectsByIdQuery, useGetProjectByIdQuery } =
  orgProjectApi;
