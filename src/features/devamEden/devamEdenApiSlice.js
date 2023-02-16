import { apiSlice } from "../../app/api/apiSlice";

export const ongoingProjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOngoingProjects: builder.query({
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

export const { useGetOngoingProjectsQuery } = ongoingProjectsApiSlice;
