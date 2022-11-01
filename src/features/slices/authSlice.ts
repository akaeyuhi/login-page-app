import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../actions/authActions';


interface AuthState {
  token: string | null,
  userId: number,
  email: string,
  loading: boolean,
  error: Error | null,
}

interface AuthResponse {
  token: string,
  id: number,
}

export interface AuthDto {
  email: string,
  password: string,
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  userId: 0,
  email: '',
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
      (state, action: PayloadAction<AuthResponse | undefined>) => {
        state.loading = false;
        state.token = action.payload?.token ? action.payload.token : '';
      });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  } });

export default authSlice.reducer;
