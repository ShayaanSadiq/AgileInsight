import { baseApi } from "../baseApi.js";

export const orgAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postOrgLogin: builder.mutation({
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

    postOrgSignup: builder.mutation({
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

    getOrgVerify: builder.query({
      query: () => ({
        url: "organisations/verify",
      }),
    }),

    getOrgLogout: builder.mutation({
      query: () => ({
        url: "organisations/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePostOrgLoginMutation,
  usePostOrgSignupMutation,
  useGetOrgLogoutMutation,
  useGetOrgVerifyQuery,
} = orgAuthApi;
