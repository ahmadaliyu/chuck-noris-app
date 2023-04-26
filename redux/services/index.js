import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@env";

export const chuckNorisApi = createApi({
  reducerPath: "chuckNorisApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => "jokes/categories",
      transformResponse: (response) => response,
    }),
    getRandomJoke: builder.query({
      query: (category) => `jokes/random?category=${category}`,
      transformResponse: (response) => response,
    }),
    searchJoke: builder.query({
      query: (query) => `jokes/search?query=${query}`,
      transformResponse: (response) => response.result,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchCategoriesQuery,
  useGetRandomJokeQuery,
  useSearchJokeQuery,
} = chuckNorisApi;
