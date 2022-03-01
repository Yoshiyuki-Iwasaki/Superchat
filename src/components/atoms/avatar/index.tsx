import React, { useState, useEffect } from 'react';
import { ChatAvatarType } from './type';
import Presenter from './presenter';

const Avatar: React.FC<ChatAvatarType> = ({ userId }) => {
  const [userData, setUserData] = useState([]);

  return <Presenter userData={userData} />;
};

export default Avatar;
