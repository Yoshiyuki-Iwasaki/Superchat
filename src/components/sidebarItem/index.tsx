import React from 'react';
import Presenter from './presenter';

const SidebarItem = ({ children }) => {
  return <Presenter>{children}</Presenter>;
};

export default SidebarItem;
