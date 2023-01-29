import { apiSlice } from "../../app/api/apiSlice"

export const listApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getData: builder.query({
            query: () => ({
                url: "/",
            })
        })
    })
})

export const {
    useGetDataQuery,
} = listApiSlice