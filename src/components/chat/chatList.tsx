import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate } from "../../util/date";
import Like from "../modules/like";
import { supabase } from "../../util/supabase";
import router from "next/router";
import ChatForm from "./chatForm";
import Avatar from "./chatAvatar";

export type ChatListType = {
  chatData: any;
};
const user = supabase.auth.user();

const List = styled.ul``;
const ListItem = styled.li`
  margin-top: 20px;
  padding: 15px;
  display: flex;
  justify-content: ${props =>
    props.user_id == user.id ? "flex-end" : "flex-start"};
  &:first-child {
    margin-top: 0;
  }
`;
const Inner = styled.div`
  position: relative;
  width: 300px;
`;
const ListHeader = styled.div`
  display: flex;
`;
const RightArea = styled.div`
  margin-left: 10px;
`;
const Date = styled.p`
  font-size: 11px;
`;
const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const ChatList: React.FC<ChatListType> = ({ chatData }) => {
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState({ message: "" });
  const { message } = inputData;

  const createPost = async e => {
    if (!message) return;
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("posts")
        .insert([{ message, user_id: user.id, chat_id: chatData.id }])
        .single();
      fetchPost();
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
    setInputData({ message: "" });
  };

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
            <ListItem key={index} user_id={post.user_id}>
              <Inner>
                <ListHeader>
                  <Avatar userId={post.user_id} />
                  <RightArea>
                    <Date>{formatDate(post.created_at)}</Date>
                    <Message>{post.message}</Message>
                  </RightArea>
                </ListHeader>
                <Like id={post.id} />
              </Inner>
            </ListItem>
          ))}
      </List>
      <ChatForm
        inputData={inputData}
        setInputData={setInputData}
        message={message}
        createPost={createPost}
      />
    </>
  );
};

export default ChatList;
