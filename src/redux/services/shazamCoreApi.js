import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_SHAZAM_CORE_API_HOST}`,
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
    getTopCharts: builder.query({
      query: () => `/v1/charts/world?country_code=US`,
    }),
    getTopChartsGenre: builder.query({
      query: (genre) => `/v1/charts/genre-world?genre_code=${genre}&country_code=US`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistid }) => `/v2/artists/details?artist_id=${artistid}`,
    }),
    getRelatedSongs: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/v1/charts/country?country_code=${countryCode}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetTopChartsGenreQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
