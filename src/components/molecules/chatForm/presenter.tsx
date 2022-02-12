import React from "react";
import { Form, Input, Button } from "./style";

const Presenter = ({ createPost, message, handleChange }) => {
  return (
    <Form onSubmit={e => createPost(e)}>
      <Input
        placeholder="message"
        value={message}
        onChange={e => handleChange(e)}
      />
      <Button onClick={e => createPost(e)}>Create Post</Button>
    </Form>
  );
};

export default Presenter;
