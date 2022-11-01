import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthDto, AuthResponse } from '../slices/authSlice';


export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, rememberMe }: AuthDto, { rejectWithValue }) => {
    try {
      // const headers = {
      //   'Content-Type': 'application/json',
      // };
      const data: AuthResponse = {
        token: '',
        email/*, password*/, rememberMe, id: 0,
      };
      return data;
      // return {
      //   ...await (await fetch('/login', {
      //     method: 'POST',
      //     headers,
      //     body: JSON.stringify(data),
      //   })).json(),
      //   rememberMe,
      // };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }

  },
);
