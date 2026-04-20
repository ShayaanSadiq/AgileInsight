import { baseApi } from "../baseApi.js";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postCreateProject: builder.mutation({
      query: (data) => {
        return {
          url: "projects/create",
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            organisationId: data.orgId,
            startDate: data.startDate,
            endDate: data.endDate,
          }),
        };
      },
      invalidatesTags: ["Projects"],
    }),

    patchProject: builder.mutation({
      query: ({ projectId, modifiedData }) => ({
        url: `projects/update/${projectId}`,
        method: "PATCH",
        body: JSON.stringify({ ...modifiedData }),
      }),
    }),
  }),
});

export const { usePostCreateProjectMutation, usePatchProjectMutation } =
  projectApi;
