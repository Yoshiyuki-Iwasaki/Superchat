import React from 'react';
import { List, Main } from './style';
import ChatForm from '../../atoms/Input';
import ChatList from '../../molecules/chatList';

const Presenter = ({ chatData, setChatData, inputData, setInputData }) => {
  return (
    <Main>
      <List>
        <ChatList chatData={chatData} />
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
