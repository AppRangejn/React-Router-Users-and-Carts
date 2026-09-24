import { baseApi } from './baseApi';

export const cartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => '/carts',
    }),
    getCartById: builder.query({
      query: (id) => `/carts/${id}`,
    }),
    getUserCarts: builder.query({
      query: (userId) => `/carts/user/${userId}`,
    }),
  }),
});

export const { useGetCartsQuery, useGetCartByIdQuery, useGetUserCartsQuery } =
  cartsApi;
