import React, { useState } from "react";
import styled from "styled-components";
import { supabase } from "../../util/supabase";

export type ChatFormType = {
  chatData: any;
};

const ChatForm: React.FC<ChatFormType> = ({ chatData }) => {
  const user = supabase.auth.user();
  const [inputData, setInputData] = useState({ message: "" });
  const { message } = inputData;

  const createPost = async e => {
    if (!message) return;
    e.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ message, user_id: user.id, chat_id: chatData.id }])
      .single();
    setInputData({ message: "" });
  };

  const handleChange = e => {
    setInputData({ ...inputData, message: e.target.value });
  };
  return (
    <Form onSubmit={e => createPost(e)}>
      <Input
        placeholder="message"
        value={message}
        onChange={e => handleChange(e)}
      />
      <Button onClick={e => createPost(e)}>Create Post</Button>
    </Form>
  );
};

export default ChatForm;

const Form = styled.form`
  margin-top: 20px;
`;
const Input = styled.input``;
const Button = styled.button`
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #f3f3f3;
`;