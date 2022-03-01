import React, { useState, useEffect } from 'react';
import { ChatAvatarType } from './type';
import Presenter from './presenter';
import userData from '../../../../userData.json';

const Avatar: React.FC = () => {
  return <Presenter userData={userData} />;
};

export default Avatar;
