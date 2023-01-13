import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import TodayIcon from '@material-ui/icons/Today';
import LinkIcon from '@material-ui/icons/Link';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MenuItem from '../Menu/MenuItem';

import './SidebarLayout.scss';

const SidebarContent = (): JSX.Element => {
  return (
    <div>
      <MenuItem
        icon={<HomeIcon className="sidebar-nav-button__icon" />}
        title="Dashboard"
        path="/"
      />
      <MenuItem
        icon={<AccessTimeIcon className="sidebar-nav-button__icon" />}
        title="Timer"
        path="/timer"
      />
      <MenuItem
        icon={<NotesIcon className="sidebar-nav-button__icon" />}
        title="Notes"
        path="/notes"
      />
      <MenuItem
        icon={<FolderOpenIcon className="sidebar-nav-button__icon" />}
        title="Work Item"
        path="/workitem"
      />
      <MenuItem
        icon={<LinkIcon className="sidebar-nav-button__icon" />}
        title="Links"
        path="/links"
      />
      <MenuItem
        icon={<TodayIcon className="sidebar-nav-button__icon" />}
        title="Calendar"
        path="/calendar"
      />
      <MenuItem
        icon={<SettingsIcon className="sidebar-nav-button__icon" />}
        title="Settings"
        path="/settings"
      />
    </div>
  );
};

export default SidebarContent;
