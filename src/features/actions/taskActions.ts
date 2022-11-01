import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk(
  'tasks/get',
  async (token: string | null, { rejectWithValue }) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token ? token : ''}`,
      };
      const response = await fetch('http://localhost:4000/tasks', {
        method: 'GET',
        headers,
      });
      if (!response.ok) {
        return rejectWithValue(await response.json());
      }
      return await response.json();
    } catch (error: any) {
      rejectWithValue(error.response);
    }
  });
