import React from 'react';
import { Form, Input, Button } from './style';

const Presenter = ({ message, handleChange }) => {
  return (
    <Form onSubmit={(e) => console.log('test')}>
      <Input
        placeholder="message"
        value={message}
        onChange={(e) => handleChange(e)}
      />
    </Form>
  );
};

export default Presenter;
