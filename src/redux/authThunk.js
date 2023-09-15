import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout } from 'services/auth';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, { reject }) => {
    try {
      const data = login(userData);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (token, { reject }) => {
    try {
      const data = logout(token);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
