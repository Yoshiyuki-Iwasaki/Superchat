import React from "react";
import Layout from "../../components/templates/layout";
import { default as Styled } from "./style";

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
      <Styled.Main>
        <Styled.Title>チャット作成</Styled.Title>
        <Styled.Form onSubmit={e => createChat(e)}>
          <Styled.ChatTitle>チャットタイトル</Styled.ChatTitle>
          <Styled.Input
            placeholder="title"
            value={title}
            onChange={e =>
              setInputData({ ...inputData, title: e.target.value })
            }
          />
          <Styled.ChatUser>ユーザー</Styled.ChatUser>
          <Styled.List>
            {userList &&
              userList.map((doc: any, index: number) => (
                <Styled.ListItem key={index}>
                  <Styled.Checkbox
                    id={doc.id}
                    type="checkbox"
                    onChange={handleChange}
                    value={checkData}
                  />
                  <Styled.Label htmlFor={doc.id}>{doc.fullname}</Styled.Label>
                </Styled.ListItem>
              ))}
          </Styled.List>
          <Styled.Button onClick={e => createChat(e)}>
            チャット作成
          </Styled.Button>
        </Styled.Form>
      </Styled.Main>
    </Layout>
  );
};

export default Presenter;
