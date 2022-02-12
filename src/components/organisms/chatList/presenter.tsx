import React from "react";
import {
  List,
  ListItem,
  Inner,
  ListHeader,
  RightArea,
  Date,
  Message,
} from "./style";
import ChatForm from "../../molecules/chatForm";
import Avatar from "../../atoms/avatar";
import { formatDate } from "../../../util/date";
import Like from "../../atoms/like";

const Presenter = ({
  posts,
  user,
  inputData,
  setInputData,
  message,
  createPost,
}) => {
  return (
    <>
      <List>
        {posts &&
          posts.map((post: any, index: number) => (
            <ListItem key={index} userId={user.id} post_userId={post.user_id}>
              <Inner>
                <ListHeader>
                  <Avatar userId={post.user_id} />
                  <RightArea>
                    <Date>{formatDate(post.created_at)}</Date>
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
        createPost={createPost}
      />
    </>
  );
};

export default Presenter;
