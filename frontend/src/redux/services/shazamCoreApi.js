import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_SHAZAM_CORE_API_HOST}/v1`,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_SHAZAM_CORE_API_KEY);
      headers.set(
        "X-RapidAPI-Host",
        process.env.REACT_APP_SHAZAM_CORE_API_HOST
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
