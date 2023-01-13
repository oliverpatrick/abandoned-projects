import React from 'react';

import ClockIcon from '../../../../assets/svg/clock.svg';
import PlusCircleIcon from '../../../../assets/svg/plusCircle.svg';

const TimerControlBar = ({
  addTimer,
}: (task: string, description: string) => void) => {
  const [task, setTask] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!task.trim() || !description.trim()) {
      return;
    }
    addTimer(task, description);
    setTask('');
  }

  const inputHandler = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-row items-center p-2 shadow-lg mb-1 w-full h-14">
      <img src={ClockIcon} alt="" className="w-10 h-10 text-slate-400" />

      <div className="w-full flex flex-row justify-between">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            placeholder="Item XYZ"
            required
            onInput={inputHandler}
            className="cursor-default mx-2 px-2 text-gray-600 border border-slate-300 rounded-md h-7 text-[100%] transition-all hover:border-zinc-500 focus:border-red-600"
          />
          <input
            name="description"
            placeholder="Description"
            onInput={inputHandler}
            className="cursor-default mx-2 px-2 text-gray-600 border border-slate-300 rounded-md h-7 text-[100%] transition-all hover:border-zinc-500 focus:border-red-600"
          />

          <button type="submit" className="">
            00:00:00
            <img
              src={PlusCircleIcon}
              alt=""
              className="w-7 h-7 mx-3 text-slate-500 hover:rounded-full hover:bg-slate-200"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TimerControlBar;
