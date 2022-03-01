import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ChatList from './';

export const basicChatList = () => <ChatList />;

export default {
  component: ChatList,
  decorators: [withKnobs],
  title: 'organisms/ChatList',
};
