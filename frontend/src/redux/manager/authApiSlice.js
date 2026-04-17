import { baseApi } from "../baseApi.js";

export const managerAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        url: "managers/login",
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }),
    }),

    postManagerSignup: builder.mutation({
      query: (data) => ({
        url: "managers/register",
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
        url: "managers/verify",
      }),
    }),

    getLogout: builder.mutation({
      query: () => ({
        url: "managers/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostManagerSignupMutation,
  useGetLogoutMutation,
  useGetVerifyQuery,
} = managerAuthApi;
