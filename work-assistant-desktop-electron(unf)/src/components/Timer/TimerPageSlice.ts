/* eslint-disable import/no-cycle */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/AppStore';
import { ITimerProps } from './Timer/TimerState';
import { ITimerListItemProps } from './TimerList/TimerItem/TimerListItem';
import { ITimerListProps } from './TimerList/TimerList';

export interface ITimerState {
  timerState: ITimerProps;
  timerListState: ITimerListProps;
  timerListItemState: ITimerListItemProps;
}

export const initialState: ITimerState = {
  timerState: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  timerListState: {
    timerListItem: [],
  },
  timerListItemState: {
    title: '',
    description: '',
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  },
};

export const TimerSlice = createSlice({
  initialState,
  name: 'timer',
  reducers: {
    setHours: (state: ITimerState): void => {
      state.timerState.hours = 0;
    },
    setMinutes: (state: ITimerState): void => {
      state.timerState.minutes = 0;
    },
    setSeconds: (state: ITimerState): void => {
      state.timerState.seconds = 0;
    },
    increaseHours: (state, action) => {
      state.timerState.hours += action.payload;
    },
    increaseMinutes: (state, action) => {
      state.timerState.minutes += action.payload;
    },
    increaseSeconds: (state, action) => {
      state.timerState.seconds += action.payload;
    },
  },
});

export const TimerSelector = createSelector(
  (state: RootState) => state.timerPageState.timerState.hours,
  (state: RootState) => state.timerPageState.timerState.minutes,
  (state: RootState) => state.timerPageState.timerState.seconds,
  (hours: number, minutes: number, seconds: number): ITimerProps => {
    return {
      hours,
      minutes,
      seconds,
    };
  }
);

// export const TimerListSelector = createSelector(
//   (state: RootState) => state.timerPageState.timerListState.timerListItem,
//   (timerListItem: ITimerListItemProps[]): ITimerListItemProps => {
//     return {

//     }
//   }
// )

export const {
  setSeconds,
  setMinutes,
  setHours,
  increaseHours,
  increaseMinutes,
  increaseSeconds,
} = TimerSlice.actions;
export const timerPageReducer = TimerSlice.reducer;
