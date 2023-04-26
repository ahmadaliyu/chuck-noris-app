import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "react-native-config";

export const chuckNorisApi = createApi({
  reducerPath: "chuckNorisApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.mutation({
      query: (categories) => `${categories}/categories`,
      transformResponse: (response) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = chuckNorisApi;
