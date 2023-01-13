import CancelIcon from '../../../../assets/svg/stop.svg';
import PauseIcon from '../../../../assets/svg/pause.svg';
import PlayArrowIcon from '../../../../assets/svg/play.svg';
import Timer, { ITimerProps } from './Timer';

export interface ITimerListProps {
  timerListItem: ITimerListItemProps[];
}

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
    <div className="flex flex-row justify-around">
      {title}
      {description}
      <Timer hours={time.hours} minutes={time.minutes} seconds={time.seconds} />
      <button type="button">
        <img src={PlayArrowIcon} alt="" />
      </button>
      <button type="button">
        <img src={PauseIcon} alt="" />
      </button>
      <button type="button">
        <img src={CancelIcon} alt="" />
      </button>
    </div>
  );
};

const TimerList = ({ timerListItem }: ITimerListProps) => {
  return (
    <div className="flex flex-col">
      {timerListItem.map((index, timerItem) => (
        <TimerListItem title="" description="" time={} />
      ))}
    </div>
  );
};

export default TimerList;
