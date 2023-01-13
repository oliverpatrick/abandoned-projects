/* eslint-disable no-plusplus */
import Button from '@material-ui/core/Button';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseHours,
  increaseMinutes,
  increaseSeconds,
  setHours,
  setMinutes,
  setSeconds,
} from '../TimerPageSlice';
import { ITimerProps } from './TimerState';

let interval: NodeJS.Timeout;

const TimerPause = () => {
  clearInterval(interval);
};

const TimerReset = () => {
  const dispatch = useDispatch();

  dispatch(setSeconds());
  dispatch(setMinutes());
  dispatch(setHours());
};

const CounterRender = ({
  hours,
  minutes,
  seconds,
}: ITimerProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    interval = setInterval(() => {
      if (seconds >= 0) {
        dispatch(increaseSeconds(1));
      }
      if (seconds === 59) {
        dispatch(setSeconds());
        dispatch(increaseMinutes(1));
      }
      if (minutes === 59) {
        setMinutes();
        dispatch(increaseHours(1));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <p>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <Button onClick={TimerPause}>Pause</Button>
      <Button onClick={TimerReset}>Reset</Button>
    </div>
  );
};

export default CounterRender;
