import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import Layout from "../../components/layout";
import { HomeType } from "./type";
import {
  Main,
  Title,
  Form,
  ChatTitle,
  Input,
  ChaUser,
  List,
  ListItem,
  Checkbox,
  Label,
  Button,
} from "./style";

const Home: React.FC<HomeType> = ({ users }) => {
  const [inputData, setInputData] = useState<any>({ title: "" });
  const [userList, setUserList] = useState<any>([]);
  const [checkData, setCheckData] = useState<any>({});
  const { title } = inputData;

  useEffect(() => {
    const fetch = async () => {
      setUserList(users.data);
    };
    fetch();
  }, []);

  const createChat = async e => {
    if (!title) return;
    e.preventDefault();
    const dataPushArray = Object.entries(checkData).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
    const { data, error } = await supabase
      .from("chat")
      .insert([{ title, users: dataPushArray }])
      .single();
    setInputData({ title: "" });
  };

  const handleChange = e => {
    setCheckData({
      ...checkData,
      [e.target.id]: e.target.checked,
    });
  };
  return (
    <Layout>
      <Main>
        <Title>チャット作成</Title>
        <Form onSubmit={e => createChat(e)}>
          <ChatTitle>チャットタイトル</ChatTitle>
          <Input
            placeholder="title"
            value={title}
            onChange={e =>
              setInputData({ ...inputData, title: e.target.value })
            }
          />
          <ChaUser>ユーザー</ChaUser>
          <List>
            {userList &&
              userList.map((doc: any, index: number) => (
                <ListItem key={index}>
                  <Checkbox
                    id={doc.id}
                    type="checkbox"
                    onChange={handleChange}
                    value={checkData}
                  />
                  <Label htmlFor={doc.id}>{doc.fullname}</Label>
                </ListItem>
              ))}
          </List>
          <Button onClick={e => createChat(e)}>チャット作成</Button>
        </Form>
      </Main>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const users = await supabase.from("users").select();
  return {
    props: { users },
  };
}
