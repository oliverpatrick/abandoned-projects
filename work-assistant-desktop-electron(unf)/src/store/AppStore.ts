import { Store, Action } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import createRootReducer, { IRootState } from '../reducer/CombineReducer';

const store = configureStore({
  reducer: createRootReducer(),
});

export const getStore = (): Store<IRootState> => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
