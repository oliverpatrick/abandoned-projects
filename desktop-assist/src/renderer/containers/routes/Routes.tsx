import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesData, { IRoutesData } from './RoutesData';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {RoutesData.map((route: IRoutesData) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
