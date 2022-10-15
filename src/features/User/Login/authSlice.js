import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  userInfo: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    login: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
    },
    register: (state, { payload: { userInfo } }) => {
      state.loading = false;
      state.userInfo = userInfo;
    },
  },
});

export const { setLoading, login, logout, register } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectUserInfo = (state) => state.auth.userInfo;
export const selectAuthLoading = (state) => state.auth.loading;
export default authSlice.reducer;
