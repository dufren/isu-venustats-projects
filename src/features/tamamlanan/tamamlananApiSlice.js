import { apiSlice } from "../../app/api/apiSlice";

export const tamamlananProjelerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTamamlananProjeler: builder.query({
      query: () => ({
        url: process.env.REACT_APP_TAMAMLANAN,
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

export const { useGetTamamlananProjelerQuery } = tamamlananProjelerApiSlice;
