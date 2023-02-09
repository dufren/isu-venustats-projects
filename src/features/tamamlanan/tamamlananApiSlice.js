import { apiSlice } from "../../app/api/apiSlice";

export const tamamlananProjelerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTamamlananProjeler: builder.query({
      query: () => ({
        url: "/venustats-tamamlanan-projeler-api/api/TamamlananProjeler",
        headers: {
          Authorization: process.env.REACT_APP_AUTH,
        },
      }),
      transformResponse: (responseData) => {
        responseData.map((project) => {
          for (const property in project) {
            if (
              project[property].toString().toLowerCase() === "null" ||
              project[property] === ""
            )
              project[property] = "----";
          }
        });
        return responseData;
      },
    }),
  }),
});

export const { useGetTamamlananProjelerQuery } = tamamlananProjelerApiSlice;
