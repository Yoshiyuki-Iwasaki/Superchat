import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import Layout from "../../components/templates/layout";
import ChatList from "../../components/organisms/chatList";
import { Title } from "./style";
import { ChatDetailType } from "./type";

const ChatDetail: React.FC<ChatDetailType> = ({ chatData }) => {
  return (
    <Layout>
      <Title>{chatData.title}</Title>
      <ChatList chatData={chatData} />
    </Layout>
  );
};

export default ChatDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);

  return {
    props: { chatData },
  };
}
