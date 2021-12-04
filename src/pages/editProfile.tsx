import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
import styled from "styled-components";
import Layout from "../components/modules/layout";

const EditProfile = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState<any>([]);
  const [inputData, setInputData] = useState<any>({ fullname: "" });
  const { fullname } = inputData;

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select()
        .eq("id", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);

  const UpdateProfile = async e => {
    if (!fullname) return;

    const { data, error } = await supabase
      .from("users")
      .upsert({ id: userList[0].id, fullname });
    setInputData({ fullname: "" });
  };

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
          <Button onClick={e => UpdateProfile(e)}>チャット作成</Button>
        </Form>
      </Main>
    </Layout>
  );
}

export default EditProfile;


const Main = styled.div``;
const Title = styled.h2`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;
const Form = styled.form`
  margin-top: 15px;
`;
const Input = styled.input``;
const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #fff;
`;