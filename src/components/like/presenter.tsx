import React from 'react';
import { LikeButton } from './style';

const Presenter = ({ liked, count, onClick }) => {
  return (
    <LikeButton liked={liked} onClick={onClick}>
      {count}
    </LikeButton>
  );
};

export default Presenter;
