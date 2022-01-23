import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import styled from "styled-components";

export type LikeType = {
  id: number;
};
const LikeButton = styled.button<{ liked: boolean }>`
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  position: absolute;
  background: ${({ liked }) => (liked ? "red" : "gray")};
  bottom: -30px;
  left: 0;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: white;

  &:before {
    position: absolute;
    content: "♡";
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const Like: React.FC<LikeType> = ({ id }) => {
  const user = supabase.auth.user();
  const [done, setDone] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    countLike();
    loadingLike();
  }, [likeCount, done]);

  const countLike = async () => {
    try {
      const { data, error } = await supabase
        .from("likes")
        .select()
        .match({ post_id: id });
      setlikeCount(data.length);
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };

  const loadingLike = async () => {
    try {
      const { data, error } = await supabase
        .from("likes")
        .select()
        .match({ post_id: id, user_id: user.id });
      if (data[0]) {
        setDone(true);
      } else {
        setDone(false);
      }
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };

  const clickLikeFunction = async e => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("likes")
        .insert([{ post_id: id, user_id: user.id }])
        .single();
      if (error) throw new Error();
      loadingLike();
      countLike();
    } catch (error) {
      alert(error.message);
    }
    setLiked(!liked);
  };

  const clickRemoveLikeButton = async e => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("likes")
        .delete()
        .match({ post_id: id, user_id: user.id });
      if (error) throw new Error();
      loadingLike();
      countLike();
    } catch (error) {
      alert(error.message);
    }
    setLiked(!liked);
  };
  return (
    <>
      <>
        {!done ? (
          <LikeButton liked={liked} onClick={e => clickLikeFunction(e)}>
            {likeCount}
          </LikeButton>
        ) : (
          <LikeButton liked={liked} onClick={e => clickRemoveLikeButton(e)}>
            {likeCount}
          </LikeButton>
        )}
      </>
    </>
  );
};

export default Like;
