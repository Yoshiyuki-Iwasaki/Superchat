import React, { FC } from 'react';
import {
  ListItem,
  Inner,
  ListHeader,
  RightArea,
  Date,
  Message,
  LikeArea,
} from './style';
import Avatar from '../avatar';
import Like from '../like';

const Presenter: FC<any> = ({ post }) => {
  return (
    <ListItem key={post.id} post_userId={post.user_id}>
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
  );
};

export default Presenter;
