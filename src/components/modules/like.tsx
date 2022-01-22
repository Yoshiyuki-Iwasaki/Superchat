import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import styled from "styled-components";

export type LikeType = {
  id: number;
};

const Like: React.FC<LikeType> = ({ id }) => {
  const user = supabase.auth.user();
  const [done, setDone] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState<number>(0);

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
      if (data[0]) { setDone(true); }
      else { setDone(false); }
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
  };
  return (
    <>
      <LikeArea>
        {!done ? (
          <Text onClick={e => clickLikeFunction(e)}>いいね</Text>
        ) : (
          <Text onClick={e => clickRemoveLikeButton(e)}>いいね済み</Text>
        )}
        <Count>{likeCount}</Count>
      </LikeArea>
    </>
  );
};

export default Like;

const LikeArea = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Text = styled.button`
  font-size: 12px;
  color: #2b3a42;
`;
const Count = styled.p`
  margin-left: 5px;
  font-size: 12px;
  color: #2b3a42;
`;