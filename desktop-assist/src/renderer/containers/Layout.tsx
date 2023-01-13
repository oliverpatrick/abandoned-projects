import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard/Dashboard';

import Sidebar from '../components/Sidebar/Sidebar';
import TimerPage from './TimerPage';
import TodoPage from './TodoPage';

export const Layout: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        <div className="bg-slate-100 flex flex-column w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/todos" element={<TodoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
