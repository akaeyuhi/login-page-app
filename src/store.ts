import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './features/slices/authSlice';
import taskReducer from './features/slices/tasksSlice';


const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
);


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
export default store;
