import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Like from './';

export const basicLike = () => <Like />;

export default {
  component: Like,
  decorators: [withKnobs],
  title: 'atoms/Like',
};
