import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Header from './';

export const basicHeader = () => <Header />;

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'organisms/Header',
};
