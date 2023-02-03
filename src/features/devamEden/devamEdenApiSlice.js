import { apiSlice } from "../../app/api/apiSlice"

export const devamEdenApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDevamEdenProjeler: builder.query({
            query: () => ({
                url: "/venustats-devameden-projeler-api/api/DevamEdenProjeler",
                headers: {
                    'Authorization': process.env.REACT_APP_AUTH,
                },
            }),
        })
    })
})

export const {
    useGetDevamEdenProjelerQuery
} = devamEdenApiSlice