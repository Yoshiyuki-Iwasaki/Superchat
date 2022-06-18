import React from 'react';
import Presenter from './presenter';
import { useLike } from './hooks';

const Like: React.FC = () => {
  const { count, liked, handleLike } = useLike();

  return <Presenter count={count} liked={liked} onClick={handleLike} />;
};

export default Like;
