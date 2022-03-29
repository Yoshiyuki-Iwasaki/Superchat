import React, { useState } from 'react';
import Presenter from './presenter';
import chat from '../../../../chatData.json';

const ChatList: React.FC<any> = ({ chatData }) => {
  return (
    <>
      <Presenter chatData={chatData} />
    </>
  );
};

export default ChatList;
