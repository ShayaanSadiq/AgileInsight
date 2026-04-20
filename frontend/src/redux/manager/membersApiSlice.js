import { baseApi } from "../baseApi.js";

export const managerMembersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSignupMember: builder.mutation({
      query: (data) => ({
        url: "users/register",
        method: "POST",
        body: JSON.stringify({
          name: data.name ? data.name : "",
          email: data.email ? data.email : "",
          password: data.email,
          projectId: data.projectId,
        }),
      }),
      invalidatesTags: ["ManagerMembers"],
    }),

    getUsersByProjId: builder.query({
      query: (projectId) => ({
        url: `managers/getAllUsers/${projectId}`,
      }),
      providesTags: ["ManagerMembers"],
    }),
  }),
});

export const { usePostSignupMemberMutation, useGetUsersByProjIdQuery } =
  managerMembersApi;
