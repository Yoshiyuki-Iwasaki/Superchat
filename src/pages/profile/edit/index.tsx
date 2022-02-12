import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import Layout from "../../../components/layout";
import { Main, Title, Form, Input, Button } from "./style";

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
    e.preventDefault();
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
          <Button onClick={e => UpdateProfile(e)}>プロフィール編集</Button>
        </Form>
      </Main>
    </Layout>
  );
};

export default EditProfile;
