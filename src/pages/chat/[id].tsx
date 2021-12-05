 import React, { useState ,useEffect} from 'react'
import { supabase } from "../../util/supabase";
import Layout from '../../components/modules/layout'
import styled from "styled-components";
import ChatForm from "../../components/chat/chatForm";
import ChatList from "../../components/chat/chatList";

export type ChatDetailType = {
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = ({ chatData }) => {
  return (
    <Layout>
      <Title>{chatData.title}</Title>
      <ChatList chatData={chatData} />
      <ChatForm chatData={chatData} />
    </Layout>
  );
};

export default ChatDetail


export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);

  return {
    props: { chatData },
  };
}

const Title = styled.h2`
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;