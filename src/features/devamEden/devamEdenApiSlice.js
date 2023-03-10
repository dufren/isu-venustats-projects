import { apiSlice } from "../../app/api/apiSlice";

export const ongoingProjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOngoingProjects: builder.query({
      query: () => ({
        url: "/venustats-devameden-projeler-api/api/DevamEdenProjeler/DevamEdenProjelerList",
        headers: {
          Authorization: process.env.REACT_APP_AUTH,
        },
      }),
      transformResponse: (responseData) => {
        let dataSorted = responseData.filter(
          (project) => project.durum !== "Bekleme"
        );

        dataSorted.map((project) => {
          for (const property in project) {
            if (project[property] === null || project[property] === "-")
              project[property] = "-";
          }
          return project;
        });
        return dataSorted;
      },
    }),
  }),
});

export const { useGetOngoingProjectsQuery } = ongoingProjectsApiSlice;
