import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// /* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  // tasks: taskReducer,
  // auth: authReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
);


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
