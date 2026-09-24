import { baseApi } from './baseApi';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (limit = 30) => `users?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
