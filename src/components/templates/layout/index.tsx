import React from 'react';
import Header from '../../organisms/header';
import { Main, Inner, Content } from './style';
import { LayoutType } from './type';

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Inner>
          <Content>{children}</Content>
        </Inner>
      </Main>
    </>
  );
};

export default Layout;
