// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'categoryapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `category`,
    }),
  }),
})


export const { useGetCategoryQuery } = categoryApi