import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/users/",
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

    postSignup: builder.mutation({
      query: (data) => ({
        url: "signup",
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
  }),
});

export const {
  usePostLoginMutation,
  usePostSignupMutation,
  useGetVerifyQuery,
} = userAuthApi;
