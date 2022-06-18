import React from 'react';
import Header from '../header';
import { Wrapper, Content } from './style';
import { LayoutType } from './type';

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
