import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const getTasks = createAsyncThunk(
  'tasks/get',
  async (_, { rejectWithValue }) => {
    try {
      const { token } = useSelector((state: RootState) => state.auth);
      const headers = {
        'Content-Type': 'application/json',
        'Auth': token ? token : '',
      };
      return await (await fetch('/tasks', {
        method: 'GET',
        headers,
      })).json();
    } catch (error: any) {
      rejectWithValue(error.response);
    }
  });
