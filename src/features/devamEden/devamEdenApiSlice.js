import { apiSlice } from "../../app/api/apiSlice";

export const devamEdenApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDevamEdenProjeler: builder.query({
      query: () => ({
        url: "/venustats-devameden-projeler-api/api/DevamEdenProjeler",
        headers: {
          Authorization: process.env.REACT_APP_AUTH,
        },
      }),
      transformResponse: (responseData) => {
        responseData.map((project) => {
          for (const property in project) {
            if (project[property] === ("NULL" || ""))
              project[property] = "----";
          }
          return project;
        });
        return responseData;
      },
    }),
  }),
});

export const { useGetDevamEdenProjelerQuery } = devamEdenApiSlice;
// testing deployment
