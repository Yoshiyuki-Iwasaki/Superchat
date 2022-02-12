import React from "react";
import Layout from "../../components/templates/layout";
import ChatList from "../../components/organisms/chatList";
import Title from "./style";

const Presenter = ({ chatData }) => {
  return (
    <Layout>
      <Title>{chatData.title}</Title>
      <ChatList chatData={chatData} />
    </Layout>
  );
};

export default Presenter;
