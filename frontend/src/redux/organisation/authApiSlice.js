import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgAuthApi = createApi({
  reducerPath: "orgAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/organisations/",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => {
        return {
          url: "login",
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        };
      },
    }),

    postSignup: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      }),
    }),

    getVerify: builder.query({
      query: () => ({
        url: "verify",
      }),
    }),

    getLogout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostSignupMutation,
  useGetLogoutMutation,
  useGetVerifyQuery,
} = orgAuthApi;
