import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbums: builder.query({
        query: (user, album) => {
          return {
            url: "/albums",
            method: "POST",
          };
        },
      }),
    };
  },
});

export const {useFetchAlbumsQuery} =  albumsApi;
export {albumsApi};