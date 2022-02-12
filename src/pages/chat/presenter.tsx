import React from "react";
import Layout from "../../components/templates/layout";
import ChatList from "../../components/organisms/chatList";
import styled from "styled-components";

const Title = styled.h2`
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 700;
`;

const Presenter = ({ chatData }) => {
  return (
    <Layout>
      <Title>{chatData.title}</Title>
      <ChatList chatData={chatData} />
    </Layout>
  );
};

export default Presenter;
