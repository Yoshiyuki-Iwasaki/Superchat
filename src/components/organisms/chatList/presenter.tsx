import React from 'react';
import {
  List,
  ListItem,
  Inner,
  ListHeader,
  RightArea,
  Date,
  Message,
  LikeArea,
} from './style';
import ChatForm from '../../atoms/Input';
import Avatar from '../../atoms/avatar';
import Like from '../../atoms/like';

const Presenter = ({ chatData, setChatData, inputData, setInputData }) => {
  return (
    <>
      <List>
        {chatData.map((post: any, index: number) => (
          <ListItem key={index} post_userId={post.user_id}>
            <Inner>
              <ListHeader>
                <Avatar />
                <RightArea>
                  <Date>{post.created_at}</Date>
                  <Message>{post.message}</Message>
                </RightArea>
              </ListHeader>
              <LikeArea>
                <Like />
              </LikeArea>
            </Inner>
          </ListItem>
        ))}
      </List>
      <ChatForm
        chatData={chatData}
        setChatData={setChatData}
        inputData={inputData}
        setInputData={setInputData}
      />
    </>
  );
};

export default Presenter;
