import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthDto } from '../slices/authSlice';


export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }: AuthDto, { rejectWithValue }) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const data: AuthDto = {
        email, password, rememberMe,
      };
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        return rejectWithValue(await response.json());
      }
      return {
        ...await response.json(),
        rememberMe,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }

  },
);
