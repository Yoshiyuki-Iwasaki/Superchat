import React, { useState } from 'react';
import Presenter from './presenter';
import chat from '../../../chatData.json';

const ChatList: React.FC = () => {
  const [inputData, setInputData] = useState<string>();
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
