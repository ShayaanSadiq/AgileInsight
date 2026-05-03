import { baseApi } from "../baseApi.js";

export const managerMembersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSignupMember: builder.mutation({
      query: (payload) => {
        return {
          url: "users/register",
          method: "POST",
          body: JSON.stringify({
            name: payload?.name || "",
            email: payload?.email || "",
            password: payload?.email || "",
            projectId: payload?.projectId || "",
          }),
        };
      },
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
