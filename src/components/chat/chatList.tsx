import React from 'react'
import styled from "styled-components";
import { formatDate } from "../../util/date";

export type ChatListType = {
  posts: any;
};

const ChatList: React.FC<ChatListType> = ({ posts }) => {
  return (
    <List>
      {posts &&
        posts.map((post: any, index: number) => (
          <ListItem key={index}>
            <Date>{formatDate(post.created_at)}</Date>
            <Message>{post.message}</Message>
          </ListItem>
        ))}
    </List>
  );
};

export default ChatList;


const List = styled.ul``;
const ListItem = styled.li`
  padding: 15px;
`;
const Date = styled.p`
  font-size: 12px;
  color: #2b3a42;
`;
const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #2b3a42;
`;