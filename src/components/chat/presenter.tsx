import React from 'react';
import { List, Main } from './style';
import ChatForm from '../Input';
import ChatListItem from '../chatItem';

const Presenter = ({ chatData, setChatData, inputData, setInputData }) => {
  return (
    <Main>
      <List>
        {chatData.map((post: any, index: number) => (
          <ChatListItem key={index} post={post} />
        ))}
      </List>
      <ChatForm
        chatData={chatData}
        setChatData={setChatData}
        inputData={inputData}
        setInputData={setInputData}
      />
    </Main>
  );
};

export default Presenter;
