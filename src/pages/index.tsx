import React, { useState, useEffect} from "react";
import { supabase } from "../util/supabase";
import Layout from '../components/modules/layout';
import styled from "styled-components";

export type HomeType = {
  users: any;
};

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
const ChatTitle = styled.p`
  font-size: 14px;
  color: #2b3a42;
`;
const ChaUser = styled.p`
  font-size: 14px;
  color: #2b3a42;
`;
const Input = styled.input`
  margin-top: 10px;
`;
const List = styled.ul`
  margin-top: 10px;
`;
const ListItem = styled.li`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input``;
const Label = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #f3f3f3;
`;