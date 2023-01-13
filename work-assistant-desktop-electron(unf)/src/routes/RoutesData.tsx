import { RouteComponentProps } from 'react-router';
import Calendar from '../components/Calendar/Calendar';
import { Dashboard } from '../components/Dashboard/Dashboard';
import Links from '../components/Links/Links';
import Notes from '../components/Notes/Notes';
import TimerPage from '../components/Timer/TimerPage';
import WorkItem from '../components/WorkItem/WorkItem';

export interface IRoutesData {
  id: number;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
}

const RoutesData: IRoutesData[] = [
  {
    id: 1,
    component: Dashboard,
    path: '/',
  },
  {
    id: 2,
    component: WorkItem,
    path: '/workitem',
  },
  {
    id: 3,
    component: Notes,
    path: '/notes',
  },
  {
    id: 4,
    component: TimerPage,
    path: '/timer',
  },
  {
    id: 5,
    component: Links,
    path: '/links',
  },
  {
    id: 6,
    component: Calendar,
    path: '/calendar',
  },
];

export default RoutesData;
