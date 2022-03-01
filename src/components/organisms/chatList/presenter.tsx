import React from 'react';
import {
  List,
  ListItem,
  Inner,
  ListHeader,
  RightArea,
  Date,
  Message,
} from './style';
import ChatForm from '../../molecules/chatForm';
import Avatar from '../../atoms/avatar';
import Like from '../../atoms/like';

const Presenter = ({ chatData, inputData, setInputData, message }) => {
  return (
    <>
      <List>
        {chatData.map((post: any, index: number) => (
          <ListItem key={index} post_userId={post.user_id}>
            <Inner>
              <ListHeader>
                <Avatar userId={post.user_id} />
                <RightArea>
                  <Date>{post.created_at}</Date>
                  <Message>{post.message}</Message>
                </RightArea>
              </ListHeader>
              <Like id={post.id} />
            </Inner>
          </ListItem>
        ))}
      </List>
      <ChatForm
        inputData={inputData}
        setInputData={setInputData}
        message={message}
      />
    </>
  );
};

export default Presenter;
