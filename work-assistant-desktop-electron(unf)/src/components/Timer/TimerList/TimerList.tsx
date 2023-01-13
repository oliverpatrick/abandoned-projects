/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import TimerListItemComponent, { ITimerListItemProps } from './TimerItem/TimerListItem';
import './TimerList.scss';

export interface ITimerListProps {
  timerListItem: ITimerListItemProps[];
}

const TimerList = ({ timerListItem }: ITimerListProps) => {
  return (
    <div className="timer-container">
      {timerListItem.map((timerItem, index) => (
        <TimerListItemComponent key={index} timerItem={timerItem} />
      ))}
    </div>
  )
}

export default TimerList;
