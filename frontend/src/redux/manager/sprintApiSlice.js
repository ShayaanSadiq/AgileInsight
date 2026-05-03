import { baseApi } from "../baseApi.js";

export const managerSprintApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSprint: builder.mutation({
      query: (data) => ({
        url: "sprints/create",
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          description: data.description ? data.description : null,
          projectId: data.projectId,
          startDate: data.startDate,
          endDate: data.endDate,
        }),
      }),
      invalidatesTags: ["managerSprints"],
    }),

    getSprintsByProjectId: builder.query({
      query: (projectId) => ({
        url: `managers/sprints/${projectId}`,
      }),
      providesTags: ["managerSprints"],
    }),
    patchSprint: builder.mutation({
      query: ({ sprintId, modifiedData }) => ({
        url: `sprints/update/${sprintId}`,
        method: "PATCH",
        body: JSON.stringify({ ...modifiedData }),
      }),
    }),
  }),
});

export const {
  usePostSprintMutation,
  usePatchSprintMutation,
  useGetSprintsByProjectIdQuery,
} = managerSprintApi;
