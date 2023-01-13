import React from 'react';

import SidebarHeader from './Layout/SidebarHeader';
import SidebarContent from './Layout/SidebarContent';
import SidebarFooter from './Layout/SidebarFooter';

import './Sidebar.scss';

function Sidebar(): JSX.Element {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter text="This the footer" />
    </div>
  );
}

export default Sidebar;
