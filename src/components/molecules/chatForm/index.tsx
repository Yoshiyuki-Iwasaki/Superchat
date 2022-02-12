import React, { useState } from "react";
import { ChatFormType } from "./type";
import Presenter from "./presenter";

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
    <Presenter
      createPost={createPost}
      message={message}
      handleChange={handleChange}
    />
  );
};

export default ChatForm;
