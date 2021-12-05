 import React, { useState ,useEffect} from 'react'
import { supabase } from "../../util/supabase";
import Layout from '../../components/modules/layout'
import styled from "styled-components";
import ChatForm from "../../components/chat/chatForm";
import ChatList from "../../components/chat/chatList";
import router from 'next/router'

export type ChatDetailType = {
  chat: any;
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = ({ chat, chatData }) => {
  const [posts, setPosts] = useState([]);
  console.log("router.query.id", router.query.id);
  console.log("chat", chat);
  console.log("chatData", chatData);

  useEffect(() => {
    fetchPost();
  }, [chatData]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("chat_id", router.query.id);
      setPosts(data);
      console.log("data", data);
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Layout>
      <Title>{chatData.title}</Title>
      {/* <ChatList posts={posts} /> */}
      <ChatForm chatData={chatData} />
    </Layout>
  );
};

export default ChatDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);

  return {
    props: { chat, chatData },
  };
}


const Title = styled.h2`
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;