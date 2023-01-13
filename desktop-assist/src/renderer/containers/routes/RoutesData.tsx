// import Calendar from '../components/Calendar/Calendar';
// import { Dashboard } from '../../components/Dashboard/Dashboard';
// import Links from '../components/Links/Links';
// import Notes from '../components/Notes/Notes';
// import TimerPage from '../../components/Timer/TimerPage';
// import WorkItem from '../components/WorkItem/WorkItem';

export interface IRoutesData {
  id: number;
  element: any;
  path: string;
}

function FourZeroFour() {
  return (
    <div>
      <h1>404 - Not found</h1>
    </div>
  );
}

const RoutesData: IRoutesData[] = [
  {
    id: 1,
    element: FourZeroFour,
    path: '/',
  },
  {
    id: 2,
    element: FourZeroFour,
    path: '/workitem',
  },
  {
    id: 3,
    element: FourZeroFour,
    path: '/notes',
  },
  {
    id: 4,
    element: FourZeroFour,
    path: '/timer',
  },
  {
    id: 5,
    element: FourZeroFour,
    path: '/links',
  },
  {
    id: 6,
    element: FourZeroFour,
    path: '/calendar',
  },
];

export default RoutesData;
