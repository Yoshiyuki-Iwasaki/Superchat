import React, { useState, useEffect } from 'react';
import router from 'next/router';
import { ChatListType } from './type';
import Presenter from './presenter';
import chat from '../../../../chatData.json';

const ChatList: React.FC = () => {
  const [inputData, setInputData] = useState({ message: '' });
  const [chatData, setChatData] = useState(chat);

  return (
    <>
      <Presenter
        chatData={chatData}
        setChatData={setChatData}
        inputData={inputData}
        setInputData={setInputData}
      />
    </>
  );
};

export default ChatList;
