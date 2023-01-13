import React from 'react';
import { minsToTimeStr } from '../../utils/time-utils';
import TimesheetColumn from './TimesheetColumn';
import WeekSelector from './WeekSelector';

function Timesheet() {
  const [weeklySummary, setWeeklySummary] = React.useState<string | number>(0);
  const [overtime, setOvertime] = React.useState<string | number>(0);

  let dailyValues = [0, 0, 0, 0, 0];
  let weeklyRequired = 37.5 * 60;

  const dailySummary = (d: any, v: any) => {
    dailyValues[d] = v;
    let sum = dailyValues.reduce((a, b) => {
      return a + b;
    });
    let ot = sum - weeklyRequired;

    setWeeklySummary(minsToTimeStr(sum));
    setOvertime(minsToTimeStr(ot));
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <WeekSelector />
      <div className="flex justify-center">
        <TimesheetColumn
          dayName="Monday"
          changeNotify={(v: any) => dailySummary(0, v)}
        />
        <TimesheetColumn
          dayName="Tuesday"
          changeNotify={(v: any) => dailySummary(1, v)}
        />
        <TimesheetColumn
          dayName="Wednesday"
          changeNotify={(v: any) => dailySummary(2, v)}
        />
        <TimesheetColumn
          dayName="Thursday"
          changeNotify={(v: any) => dailySummary(3, v)}
        />
        <TimesheetColumn
          dayName="Friday"
          changeNotify={(v: any) => dailySummary(4, v)}
        />

        <form className="flex flex-col w-42 ">
          <label
            className="flex flex-row justify-between my-2 mr-2 text-blue-700 font-semibold"
            htmlFor="weekly"
          >
            Weekly Total:
            <input
              className="w-20 text-center bg-transparent"
              type="text"
              name="weekly"
              value={weeklySummary}
              disabled
            ></input>
          </label>

          <label
            className="flex flex-row justify-between my-2 mr-2 text-blue-700 font-semibold"
            htmlFor="quota"
          >
            Weekly Quota:
            <input
              className="w-20 text-center bg-transparent"
              type="text"
              name="quota"
              value={minsToTimeStr(weeklyRequired)}
              disabled
            ></input>
          </label>

          <button
            className="bg-purple-700 rounded-md text-slate-50 w-28"
            type="submit"
            value={'Submit'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Timesheet;
