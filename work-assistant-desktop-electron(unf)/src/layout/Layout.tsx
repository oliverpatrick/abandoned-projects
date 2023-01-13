import React from 'react';
import { Routes as RoutedComponent } from '../routes/Routes';

import './Layout.scss';
import Sidebar from '../components/Sidebar/Sidebar';

export const Layout: React.FC = () => {
  return (
    <div id="layout">
      <Sidebar />
      <div id="layout__content">
        <RoutedComponent />
      </div>
    </div>
  );
};

export default Layout;
