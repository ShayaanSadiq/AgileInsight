import { baseApi } from "../baseApi.js";

export const orgAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => {
        return {
          url: "organisations/login",
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
        url: "organisations/register",
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
        url: "organisations/verify",
      }),
    }),

    getLogout: builder.mutation({
      query: () => ({
        url: "organisations/logout",
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
