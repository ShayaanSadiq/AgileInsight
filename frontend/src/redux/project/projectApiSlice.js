import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgProjectApi = createApi({
  reducerPath: "orgProjectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/projects/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postCreateProject: builder.mutation({
      query: (data) => ({
        url: "create",
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          managerId: data.managerId,
          organisationId: data.organisationId,
          expectedSprints: data.expectedSprints,
        }),
      }),
    }),
  }),
});

export const { useGetProjectsByIdQuery, usePostCreateProjectMutation } =
  orgProjectApi;
