import React from "react";
import Header from "../../organisms/header";
import Sidebar from "../../organisms/sidebar";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "../../style";
import { Main, Inner, Content } from "./style";
import { LayoutType } from "./type";

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Header />
          <Main>
            <Inner>
              <Sidebar />
              <Content>{children}</Content>
            </Inner>
          </Main>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default Layout;
