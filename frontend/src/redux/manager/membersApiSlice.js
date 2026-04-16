import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const managerMembersApi = createApi({
  reducerPath: "managerMemberApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/users/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postSignupMember: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: JSON.stringify({
          name: data.name ? data.name : "",
          email: data.email ? data.email : "",
          password: data.email,
          projectId: data.projectId,
        }),
      }),
    }),
  }),
});

export const { usePostSignupMemberMutation } = managerMembersApi;
