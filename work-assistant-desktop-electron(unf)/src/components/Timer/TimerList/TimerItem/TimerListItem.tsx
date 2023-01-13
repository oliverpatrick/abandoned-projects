import React from 'react';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { ITimerProps } from '../../Timer/TimerState';
import Timer from '../../Timer/Timer';

export interface ITimerListItemProps {
  title: string;
  description: string;
  time: ITimerProps;
}

export const TimerListItem = ({
  title,
  description,
  time,
}: ITimerListItemProps): JSX.Element => {
  return (
    <div className="timer-item">
      {title}
      {description}
      <Timer hours={time.hours} minutes={time.minutes} seconds={time.seconds} />
      <Button size="small">
        <PlayArrowIcon />
      </Button>
      <Button size="small">
        <PauseIcon />
      </Button>
      <Button size="small">
        <CancelIcon />
      </Button>
    </div>
  );
};

export default TimerListItem;
