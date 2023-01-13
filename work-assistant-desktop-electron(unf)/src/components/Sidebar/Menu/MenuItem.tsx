import React from 'react';
import { Link } from 'react-router-dom';

import './MenuItem.scss';

export interface IMenuItemProps {
  icon: JSX.Element;
  title: string;
  path: string;
}

const MenuItem = ({ icon, title, path }: IMenuItemProps) => {
  return (
    <Link className="link-style" to={path}>
      <div className="sidebar-nav-button">
        {icon}
        {title}
      </div>
    </Link>
  );
};

export default MenuItem;
