import React, { useState, useEffect } from "react";
import { formatDate } from "../../../util/date";
import Like from "../../atoms/like";
import { supabase } from "../../../util/supabase";
import router from "next/router";
import ChatForm from "../../molecules/chatForm";
import Avatar from "../../atoms/avatar";
import { ChatListType } from "./type";
import {
  List,
  ListItem,
  Inner,
  ListHeader,
  RightArea,
  Date,
  Message,
} from "./style";

const ChatList: React.FC<ChatListType> = ({ chatData }) => {
  const user = supabase.auth.user();
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
            <ListItem key={index} userId={user.id} post_userId={post.user_id}>
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
