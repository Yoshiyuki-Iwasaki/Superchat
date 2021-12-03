import styled from "styled-components";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export type LayoutType = {
  children: any;
  users: any;
};

const Layout: React.FC<LayoutType> = ({ children, users }) => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar users={users} />
        <Content>{children}</Content>
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: calc(100% - (100% / 5));
`;