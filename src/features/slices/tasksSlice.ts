import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasks } from '../actions/taskActions';


export interface TaskDto {
  text: string,
  id: number,
}

export interface TaskState {
  tasks: TaskDto[],
  loading: boolean,
  error: Error | null
}


const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTasks.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTasks.fulfilled,
      (state, action: PayloadAction<TaskDto[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      });
    builder.addCase(getTasks.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
      alert(state.error);
    });
  },
});

export default taskSlice.reducer;
