import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from 'src/services/http';
import { HotelType } from 'src/services/http/explore/types';

export const exploreApi = createApi({
  reducerPath: 'explore',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    getHotels: builder.query<HotelType[], void>({
      query: () => 'hotels',
    }),
  }),
});

export const { useGetHotelsQuery } = exploreApi;
