import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk } from './authThunk';

const userInitialState = {
  name: null,
  token: null,
  error: null,
};

const handlePending = () => {
  console.log('first');
  return;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducers: {},
  extraReducers: {
    [loginThunk.pending]: handlePending,
    [loginThunk.rejected]: handleReject,
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.name = payload.user.name;
      state.token = payload.token;
    },
    [logoutThunk.pending]: handlePending,
    [logoutThunk.rejected]: state => {
      state.name = null;
      state.token = null;
    },
    [logoutThunk.fulfilled]: state => {
      state.name = null;
      state.token = null;
    },
  },
});

export const { setUsername } = authSlice.actions;

export default authSlice.reducer;