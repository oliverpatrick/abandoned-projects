import React from 'react';
import { Route } from 'react-router';
import RoutesData, { IRoutesData } from './RoutesData';

export const Routes: React.FC = () => {
  return (
    <>
      {RoutesData.map((route: IRoutesData) => (
        <Route
          key={route.id}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </>
  );
};

export default Routes;
