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

export const { useGetDevamEdenProjelerQuery } = devamEdenApiSlice;
