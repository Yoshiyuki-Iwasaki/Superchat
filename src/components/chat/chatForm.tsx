import React, { useState } from "react";
import styled from "styled-components";

export type ChatFormType = {
  inputData: any;
  setInputData: any;
  message: any;
  createPost: any;
};

const Form = styled.form`
  margin-top: 20px;
`;
const Input = styled.input`
  font-size: 14px;
  color: #2b3a42;
`;
const Button = styled.button`
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #f3f3f3;
`;

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
