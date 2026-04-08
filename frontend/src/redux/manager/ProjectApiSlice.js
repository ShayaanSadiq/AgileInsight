import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/managers/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getProjectsById: builder.query({
      query: (id) => ({
        url: `project/${id}`,
      }),
    }),
  }),
});

export const { useGetProjectsByIdQuery } = projectApi;
