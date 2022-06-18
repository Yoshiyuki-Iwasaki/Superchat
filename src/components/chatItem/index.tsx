import React from 'react';
import Presenter from './presenter';

const ChatListItem: React.FC<any> = ({ post }) => {
  return (
    <>
      <Presenter post={post} />
    </>
  );
};

export default ChatListItem;
