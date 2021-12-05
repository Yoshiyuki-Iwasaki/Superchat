import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate } from "../../util/date";
import Like from '../modules/like';
import { supabase } from "../../util/supabase";
import router from "next/router";
import ChatForm from "./chatForm";

export type ChatListType = {
  chatData: any;
};

const ChatList: React.FC<ChatListType> = ({ chatData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, [chatData, posts]);

  console.log('posts', posts);
  console.log('chatData', chatData);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("chat_id", router.query.id);
      setPosts(data);
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <List>
        {posts &&
          posts.map((post: any, index: number) => (
            <ListItem key={index}>
              <Date>{formatDate(post.created_at)}</Date>
              <Message>{post.message}</Message>
              <Like id={post.id} />
            </ListItem>
          ))}
      </List>
      <ChatForm chatData={chatData} />
    </>
  );
};

export default ChatList;


const List = styled.ul``;
const ListItem = styled.li`
  padding: 15px;
`;
const Date = styled.p`
  font-size: 12px;
  color: #2b3a42;
`;
const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #2b3a42;
`;