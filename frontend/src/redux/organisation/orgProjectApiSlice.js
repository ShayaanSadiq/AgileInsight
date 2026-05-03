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

    patchOrgProject: builder.mutation({
      query: ({ modifiedData, projectId }) => ({
        url: `projects/update/${projectId}`,
        method: "PATCH",
        body: JSON.stringify({ ...modifiedData }),
      }),
    }),
  }),
});

export const {
  useGetProjectsByIdQuery,
  useGetProjectByIdQuery,
  usePatchOrgProjectMutation,
} = orgProjectApi;
