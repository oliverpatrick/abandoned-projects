/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
// import Timer from './Timer/Timer';
import TimerControlBar from './TimerControlBar/TimerControlBar';
import TimerListItem from './TimerList/TimerItem/TimerListItem';
import { TimerSelector } from './TimerPageSlice';
// import TimerList from './TimerList/TimerList';

export function TimerPage() {
  const currentTime = useSelector(TimerSelector);

  return (
    <div>
      <TimerControlBar />
      {/* <TimerList timerListItem={}  /> */}
      {/* <Timer
        hours={currentTime.hours}
        minutes={currentTime.minutes}
        seconds={currentTime.seconds}
      /> */}
      <TimerListItem title="t" description="d" time={currentTime} />
    </div>
  );
}

export default TimerPage;
