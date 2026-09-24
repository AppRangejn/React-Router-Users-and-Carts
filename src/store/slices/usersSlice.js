import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isInitialized: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
      state.isInitialized = true;
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    updateUser: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? { ...user, ...payload } : user,
      );
    },
  },
});

const { actions, reducer } = usersSlice;

export const { setUsers, deleteUser, updateUser } = actions;

export default reducer;
