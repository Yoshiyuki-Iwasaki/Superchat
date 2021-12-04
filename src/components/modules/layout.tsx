import styled from "styled-components";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export type LayoutType = {
  children: any;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Inner>
          <Sidebar />
          <Content>{children}</Content>
        </Inner>
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;
const Content = styled.div`
  width: calc(100% - (100% / 5));
`;