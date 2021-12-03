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
        <Sidebar />
        {children}
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
`;
