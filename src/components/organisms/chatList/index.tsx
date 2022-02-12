import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import router from "next/router";
import { ChatListType } from "./type";
import Presenter from "./presenter";

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
      <Presenter
        posts={posts}
        user={user}
        inputData={inputData}
        setInputData={setInputData}
        message={message}
        createPost={createPost}
      />
    </>
  );
};

export default ChatList;
