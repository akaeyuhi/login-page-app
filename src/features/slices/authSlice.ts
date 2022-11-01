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
  token: string,
  email: string,
  id: number,
  rememberMe?: boolean
}

export interface AuthDto {
  email: string,
  password: string,
  rememberMe: boolean
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
      (state, action: PayloadAction<AuthResponse | undefined>) => {
        state.loading = false;
        state.token = action.payload?.token ?
          action.payload.token :
          '$2a$10$111NIyp95LN7lg58X9WEu.FCrIIzpsvCJGCAofgtSumemgT/Wqk';
        state.userId = 0;
        state.email = 'example@gmail.com';
        if (action.payload?.rememberMe) {
          localStorage.setItem(
            'token',
            '$2a$10$111NIyp95LN7lg58X9WEu.FCrIIzpsvCJGCAofgtSumemgT/Wqk');
          localStorage.setItem('email', 'example@gmail.com');
        }
      });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  } });

export default authSlice.reducer;
