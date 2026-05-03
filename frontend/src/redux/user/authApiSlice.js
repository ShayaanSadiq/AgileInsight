import { baseApi } from "../baseApi.js";

export const userAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }),
    }),

    getVerify: builder.query({
      query: () => ({
        url: "users/verify",
      }),
    }),
  }),
});

export const { usePostLoginMutation, useGetVerifyQuery } = userAuthApi;
