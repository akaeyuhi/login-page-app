import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../actions/authActions';


interface AuthState {
  token: string | null,
  userId: number,
  email: string | null,
  loading: boolean,
  error: Error | null,
}

export interface AuthResponse {
  accessToken: string,
  user: {
    email: string,
    id: number,
  },
  rememberMe: 'on' | 'off'
}

export interface AuthDto {
  email: string,
  password: string,
  rememberMe: string
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  userId: 0,
  email: localStorage.getItem('email'),
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        console.log(action.payload);
        state.token = action.payload.accessToken;
        state.userId = action.payload.user.id;
        state.email = action.payload.user.email;
        if (action.payload?.rememberMe === 'on') {
          localStorage.setItem('token', state.token);
          localStorage.setItem('email', state.email);
        }
      });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
      alert(state.error);
    });
  } });

export default authSlice.reducer;
