import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgAuthApi = createApi({
  reducerPath: "orgAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/organisations/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    postSignup: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostSignupMutation } = orgAuthApi;
