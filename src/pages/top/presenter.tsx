import React from "react";
import Layout from "../../components/templates/layout";
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
const ChatTitle = styled.p`
  font-size: 14px;
`;
const ChatUser = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
const Input = styled.input`
  margin-top: 10px;
  font-size: 14px;
`;
const List = styled.ul`
  margin-top: 10px;
`;
const ListItem = styled.li`
  margin-top: 10px;
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

const Presenter = ({
  createChat,
  title,
  inputData,
  checkData,
  setInputData,
  userList,
  handleChange,
}) => {
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
          <ChatUser>ユーザー</ChatUser>
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

export default Presenter;
