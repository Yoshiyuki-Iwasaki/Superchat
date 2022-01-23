import styled from "styled-components";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export type LayoutType = {
  children: any;
};

const Main = styled.div`
  height: calc(100vh - 60px);
`;
const Inner = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  max-width: 1000px;
  height: 100%;
`;
const Content = styled.div`
  padding: 0 15px;
  width: calc(100% - (100% / 5));
  box-sizing: border-box;
`;

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
