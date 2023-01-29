import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
        headers.set("Authorization", process.env.REACT_APP_AUTH)
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})