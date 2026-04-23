import { baseApi } from "../baseApi.js";

export const orgTaskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllManagers: builder.query({
      query: () => ({
        url: "organisations/getallmanagers",
      }),
    }),
  }),
});

export const { useGetAllManagersQuery } = orgTaskApi;
