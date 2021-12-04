import React, { useState, useEffect} from "react";
import { supabase } from "../components/util/supabase";
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
        <Title>チャット一覧</Title>
        <Form onSubmit={e => createChat(e)}>
          <input
            placeholder="title"
            value={title}
            onChange={e =>
              setInputData({ ...inputData, title: e.target.value })
            }
          />
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



const Main = styled.div`
  padding-top: 30px;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;
const Form = styled.form``;
const List = styled.ul``;
const ListItem = styled.li``;
const Checkbox = styled.input``;
const Label = styled.label``;
const Button = styled.button``;