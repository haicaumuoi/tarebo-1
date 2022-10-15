import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
