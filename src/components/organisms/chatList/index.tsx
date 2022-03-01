import React, { useState, useEffect } from 'react';
import router from 'next/router';
import { ChatListType } from './type';
import Presenter from './presenter';
import chatData from '../../../../chatData.json';

const ChatList: React.FC = () => {
  const [inputData, setInputData] = useState({ message: '' });
  const { message } = inputData;

  return (
    <>
      <Presenter
        chatData={chatData}
        inputData={inputData}
        setInputData={setInputData}
        message={message}
      />
    </>
  );
};

export default ChatList;
