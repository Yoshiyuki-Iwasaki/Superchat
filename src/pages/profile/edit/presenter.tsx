import React from "react";
import Layout from "../../../components/templates/layout";
import { default as Styled } from "./style";

const Presenter = ({ fullname, UpdateProfile, inputData, setInputData }) => {
  return (
    <Layout>
      <Styled.Main>
        <Styled.Title>プロフィール編集</Styled.Title>
        <Styled.Form onSubmit={e => UpdateProfile(e)}>
          <Styled.Input
            placeholder="fullname"
            value={fullname}
            onChange={e =>
              setInputData({ ...inputData, fullname: e.target.value })
            }
          />
          <Styled.Button onClick={e => UpdateProfile(e)}>
            プロフィール編集
          </Styled.Button>
        </Styled.Form>
      </Styled.Main>
    </Layout>
  );
};

export default Presenter;
