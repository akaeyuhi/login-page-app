import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthDto } from '../slices/authSlice';


export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: AuthDto, { rejectWithValue }) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const data: AuthDto = {
        email, password,
      };
      await fetch('/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }

  },
);
