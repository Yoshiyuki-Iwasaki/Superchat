import React, { useState, useEffect } from 'react';
import { LikeType } from './type';
import Presenter from './presenter';
import { useLike } from './hooks';

const Like: React.FC<LikeType> = () => {
  const { count, liked, handleLike } = useLike();

  return (
    <>
      <Presenter count={count} liked={liked} onClick={handleLike} />
    </>
  );
};

export default Like;
