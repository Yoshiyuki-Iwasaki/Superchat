import React, { useState } from 'react';
import { ChatFormType } from './type';
import Presenter from './presenter';

const ChatForm: React.FC<ChatFormType> = ({
  chatData,
  setChatData,
  inputData,
  setInputData,
}) => {
  const handleInput = (e: any) => {
    setInputData(e.target.value);
    console.log('inputData', inputData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputData) return;
    setChatData([
      ...chatData,
      {
        id: chatData.length + 1,
        user_id: `1`,
        created_at: '12:00',
        message: inputData,
      },
    ]);
    console.log(chatData);
    setInputData('');
  };
  return (
    <Presenter
      message={inputData}
      handleChange={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default ChatForm;
