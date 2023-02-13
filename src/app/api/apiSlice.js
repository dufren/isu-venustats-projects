import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apps.istinye.edu.tr",
  }),
  endpoints: (builder) => ({}),
});
