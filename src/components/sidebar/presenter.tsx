import React from 'react';
import SidebarItem from '../sidebarItem';
import { Main, List } from './style';

const Presenter = () => {
  return (
    <Main>
      <List>
        <SidebarItem>ユーザー01</SidebarItem>
        <SidebarItem>ユーザー02</SidebarItem>
        <SidebarItem>ユーザー03</SidebarItem>
      </List>
    </Main>
  );
};

export default Presenter;
