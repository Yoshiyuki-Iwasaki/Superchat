 import React, { useState ,useEffect} from 'react'
import { supabase } from "../../util/supabase";
import Layout from '../../components/modules/layout'
import styled from "styled-components";
import ChatForm from "../../components/chat/chatForm";
import ChatList from "../../components/chat/chatList";
import router from 'next/router'

export type ChatDetailType = {
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = () => {
  const [posts, setPosts] = useState([]);
  console.log('router', router);

  // useEffect(() => {
  //   fetchPost();
  //   console.log("chatData", chatData);
  // }, []);

  // const fetchPost = async () => {
  //   try {
  //     const { data, error } = await supabase
  //       .from("posts")
  //       .select()
  //       .eq("chat_id", chatData.id);
  //     setPosts(data);
  //     console.log("data", data);
  //     if (error) throw new Error();
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  return (
    <Layout>
    {/* <Title>{chatData.title}</Title> */}
    {/* <ChatList posts={posts} /> */}
    {/* <ChatForm chatData={chatData} /> */}
    </Layout>
  );
};

export default ChatDetail;

const Title = styled.h2`
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;