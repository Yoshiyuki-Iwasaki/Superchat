import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate } from "../../util/date";
import Like from '../modules/like';
import { supabase } from "../../util/supabase";

export type ChatListType = {
  chatData: any;
};

const ChatList: React.FC<ChatListType> = ({ chatData }) => {
  const [posts, setPosts] = useState([]);

  console.log("chatData", chatData);

  useEffect(() => {
    fetchPost();
  }, [posts]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("chat_id", chatData.id);
      setPosts(data);
      console.log("data", data);
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };


  console.log('posts', posts);

  return (
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