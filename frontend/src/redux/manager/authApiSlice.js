import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const managerAuthApi = createApi({
  reducerPath: "managerAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/managers/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }),
    }),

    postManagerSignup: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.email,
        }),
      }),
    }),

    getVerify: builder.query({
      query: () => ({
        url: "verify",
      }),
    }),

    getLogout: builder.query({
      query: () => ({
        url: "logout",
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostManagerSignupMutation,
  useGetLogoutQuery,
  useGetVerifyQuery,
} = managerAuthApi;
