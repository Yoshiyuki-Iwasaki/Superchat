import React from "react";
import Layout from "../../../components/templates/layout";
import styled from "styled-components";

const Main = styled.div``;
const Title = styled.h2`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
`;
const Form = styled.form`
  margin-top: 15px;
`;
const Input = styled.input`
  font-size: 14px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #f3f3f3;
`;

const Presenter = ({ fullname, UpdateProfile, inputData, setInputData }) => {
  return (
    <Layout>
      <Main>
        <Title>プロフィール編集</Title>
        <Form onSubmit={e => UpdateProfile(e)}>
          <Input
            placeholder="fullname"
            value={fullname}
            onChange={e =>
              setInputData({ ...inputData, fullname: e.target.value })
            }
          />
          <Button onClick={e => UpdateProfile(e)}>プロフィール編集</Button>
        </Form>
      </Main>
    </Layout>
  );
};

export default Presenter;
