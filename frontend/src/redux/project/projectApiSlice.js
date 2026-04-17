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
    }),
  }),
});

export const { usePostCreateProjectMutation } = projectApi;
