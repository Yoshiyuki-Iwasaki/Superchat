import React, { useState, useEffect } from 'react';
import { LikeType } from './type';
import Presenter from './presenter';

const Like: React.FC<LikeType> = ({ id }) => {
  const [done, setDone] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <>
      <Presenter
        liked={liked}
        likeCount={likeCount}
        onClick={(e) => console.log('test')}
      />
    </>
  );
};

export default Like;
