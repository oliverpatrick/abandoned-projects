import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React from 'react';
import { useDispatch } from 'react-redux';

const TimerControlBar = () => {
  const dispatch = useDispatch();

  const inputTitleHandler = (e: any) => {
    console.log(e.target.value);
  };
  const inputDescriptionHandler = (e: any) => {
    console.log(e.target.value);
  };
  const submitTimer = () => {
    return 'hello';
  };

  return (
    <div className="timer-control-bar">
      <div className="timer-control-bar__left">
        <AccessTimeIcon />
        <p>Timer</p>

        <div className="timer-control-bar__input">
          <TextField
            size="small"
            variant="outlined"
            name="Title"
            placeholder="Item XYZ"
            required
            onInput={inputTitleHandler}
          />
          <>...</>
          <TextField
            size="small"
            variant="outlined"
            name="Description"
            placeholder="Description"
            onInput={inputDescriptionHandler}
          />
        </div>
      </div>
      <div className="timer-control-bar__countdown">
        00:00:00
        {/* <Button size="small" onClick={addTimer}> */}
        <Button size="small" onClick={submitTimer}>
          <AddBoxIcon />
        </Button>
      </div>
    </div>
  );
};

export default TimerControlBar;
