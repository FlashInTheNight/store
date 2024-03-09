import { apiSlice } from "./apiSlice";

export const boilerPartsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBestsellersOrNewPartsFx: builder.query({
      query: (url: string) => ({
        url,
        method: "GET",
      }),
    }),
    getBoilerPartsFx: builder.query({
      query: () => ({
        url: "/boiler-parts",
        method: "GET",
      }),
    }),
    getBoilerPartFx: builder.query({
      query: (id: string) => ({
        url: `/boiler-parts/find/${id}`,
        method: "GET",
      }),
    }),
    searchParts: builder.query({
      query: (search: string | null) => ({
        url: "/boiler-parts/search",
        method: "POST",
        body: { search },
      }),
    }),
    getPartByNameFx: builder.query({
      query: (name: string) => ({
        url: `/boiler-parts/name/`,
        method: "POST",
        body: { name },
      }),
    })
  }),
})


export const { useSearchPartsQuery, useGetBestsellersOrNewPartsFxQuery, useGetBoilerPartsFxQuery, useGetBoilerPartFxQuery, useGetPartByNameFxQuery } = boilerPartsApi