/* eslint-disable import/no-cycle */
import { combineReducers, Reducer } from 'redux';
import { sidebarReducer } from '../components/Sidebar/SidebarSlice';
import { timerPageReducer } from '../components/Timer/TimerPageSlice';

export interface IRootState {
  sidebarState: ReturnType<typeof sidebarReducer>;
  timerPageState: ReturnType<typeof timerPageReducer>;
  // loginState: ReturnType<typeof LoginReducer>;
}

const createRootReducer: () => Reducer<IRootState> = (): Reducer<IRootState> =>
  combineReducers<IRootState>({
    sidebarState: sidebarReducer,
    timerPageState: timerPageReducer,
    // loginState: LoginReducer,
  });

export default createRootReducer;
