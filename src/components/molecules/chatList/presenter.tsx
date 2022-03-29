import React from 'react';
import ChatListItem from '../../atoms/chatItem';

const Presenter = ({ chatData }) => {
  return (
    <>
      {chatData.map((post: any, index: number) => (
        <ChatListItem key={index} post={post} />
      ))}
    </>
  );
};

export default Presenter;
