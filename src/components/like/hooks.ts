import { useState } from 'react';

export const useLike = () => {
  const [count, setCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLiked(!liked);
    liked ? setCount(count - 1) : setCount(count + 1);
  };

  return { count, liked, handleLike };
};
