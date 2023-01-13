import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarWithHeaderLayout from '../component/layouts/Main';
import { AuthContext } from '../utils/context/AuthContext';

export const AppPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <SidebarWithHeaderLayout
      firstname={user!.firstName}
      lastname={user!.lastName}
      role={user!.role}
    >
      <Outlet />
    </SidebarWithHeaderLayout>
  );
};

export default AppPage;
