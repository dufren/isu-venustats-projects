import { apiSlice } from "../../app/api/apiSlice"

export const tamamlananProjelerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTamamlananProjeler: builder.query({
            query: () => ({
                url: "/venustats-tamamlanan-projeler-api/api/TamamlananProjeler"
            })
        })
    })
})

export const {
    useGetTamamlananProjelerQuery
} = tamamlananProjelerApiSlice