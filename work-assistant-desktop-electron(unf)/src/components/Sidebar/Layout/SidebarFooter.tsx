import React from 'react';
import './SidebarLayout.scss';

interface ISidebarFooter {
  text: string;
}

const SidebarFooter = ({ text }: ISidebarFooter) => {
  return <div className="sidebar-footer">{text}</div>;
};

export default SidebarFooter;
