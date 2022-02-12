import React, { useState } from "react";
import { Form, Input, Button } from "./style";
import { ChatFormType } from "./type";

const ChatForm: React.FC<ChatFormType> = ({
  inputData,
  setInputData,
  message,
  createPost,
}) => {
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
