import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IDashboardData {
  holidayTaken: number;
  holidayDays: number;
  daysAbsent: Number;
}

const Dashboard: NextPage = () => {
  const [data, setData] = useState<IDashboardData[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3002/statistics')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const holidayData = {
    labels: ['Holidays Taken', 'Remaining'],
    datasets: [
      {
        label: '# of votes',
        data: ['1', '29'],
        backgroundColor: ['rgba(216, 0, 0, 0.63)', 'rgba(0, 141, 12, 0.575)'],
        borderColor: ['#ce002d', '#1eb600'],
        borderWidth: 1
      }
    ]
  };

  const absentData = {
    labels: ['Absent', 'Present'],
    datasets: [{}]
  };

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <LoadingSpinner />
      </div>
    );
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-b">
        <div className="flex justify-between pl-6 -mb-px">
          <h3 className="text-blue-800 py-4 font-semi text-xl">Dashboard</h3>
          <div className="flex"></div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row">
        <div className="w-1/2">
          <h1 className="text-center font-semibold">Holidays</h1>
          {data.map((h, index) => (
            <Doughnut
              key={index}
              data={{
                labels: ['Holidays Taken', 'Remaining'],
                datasets: [
                  {
                    label: '# of votes',
                    data: [h.holidayTaken, h.holidayDays],
                    backgroundColor: [
                      'rgba(216, 0, 0, 0.63)',
                      'rgba(0, 141, 12, 0.575)'
                    ],
                    borderColor: ['#ce002d', '#1eb600'],
                    borderWidth: 1
                  }
                ]
              }}
            />
          ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-center font-semibold">Absence</h1>
          {data.map((h, index) => (
            <Doughnut
              key={index}
              data={{
                labels: ['Absence', 'Present'],
                datasets: [
                  {
                    label: '# of votes',
                    data: [h.daysAbsent, 255],
                    backgroundColor: [
                      'rgba(216, 0, 0, 0.63)',
                      'rgba(0, 141, 12, 0.575)'
                    ],
                    borderColor: ['#ce002d', '#1eb600'],
                    borderWidth: 1
                  }
                ]
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
