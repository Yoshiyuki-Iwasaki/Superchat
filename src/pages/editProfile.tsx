import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
import styled from "styled-components";

const editProfile = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState<any>([]);
  const [inputData, setInputData] = useState<any>({ fullname: "" });
  const { fullname } = inputData;

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select()
        .contains("id", [user.id]);
      setUserList(data);
      console.log("data", data);
    };
    fetch();
  }, []);

  console.log('userList', userList);

  const UpdateProfile = async e => {
    if (!fullname) return;

    const { data, error } = await supabase.from("users").upsert({ id: '', fullname });
    setInputData({ fullname: "" });
  };

  return (
    <div>
      <Form onSubmit={e => UpdateProfile(e)}>
        <input
          placeholder="fullname"
          value={fullname}
          onChange={e =>
            setInputData({ ...inputData, fullname: e.target.value })
          }
        />
        <Button onClick={e => UpdateProfile(e)}>チャット作成</Button>
      </Form>
    </div>
  );
}

export default editProfile;


const Form = styled.form`
  margin-top: 15px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #fff;
`;