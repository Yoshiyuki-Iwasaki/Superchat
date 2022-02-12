import React from "react";
import { LikeButton } from "./style";

const Presenter = ({ liked, likeCount, onClick }) => {
  return (
    <LikeButton liked={liked} onClick={onClick}>
      {likeCount}
    </LikeButton>
  );
};

export default Presenter;
