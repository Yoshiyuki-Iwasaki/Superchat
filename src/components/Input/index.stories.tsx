import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './';

export const basicAvatar = () => (
  <Input chatData={''} setChatData={''} inputData={''} setInputData={''} />
);

export default {
  component: Input,
  decorators: [withKnobs],
  title: 'atoms/Input',
};
