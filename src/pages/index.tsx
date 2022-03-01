import React from 'react';
import Presenter from './presenter';

type ChatDetailType = {
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = () => {
  return <Presenter />;
};

export default ChatDetail;
