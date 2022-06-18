import React from 'react';
import { Form, Input, Button } from './style';

const Presenter = ({ message, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Input
        placeholder="message"
        value={message}
        onChange={(e) => handleChange(e)}
      />
    </Form>
  );
};

export default Presenter;
