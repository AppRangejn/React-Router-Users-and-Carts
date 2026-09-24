import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { baseApi } from '../api/baseApi';
import usersReducer from './slices/usersSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, logger),
});
