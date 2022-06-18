import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Avatar from './';

export const basicAvatar = () => <Avatar />;

export default {
  component: Avatar,
  decorators: [withKnobs],
  title: 'atoms/Avatar',
};
