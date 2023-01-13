import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarLayout.scss';

function SidebarHeader(): JSX.Element {
  return (
    <div className="sidebar-header">
      <Avatar>TN</Avatar>
      <p className="sidebar-header__text">
        Test Name
        <br />
        <p style={{ fontSize: '9px' }}>Monday 12/03/2021</p>
      </p>
    </div>
  );
}

export default SidebarHeader;
