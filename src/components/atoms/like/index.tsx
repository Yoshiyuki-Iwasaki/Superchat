import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import { LikeType } from "./type";
import Presenter from "./presenter";

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

  const RemoveLike = async () => {
    const { error } = await supabase
      .from("likes")
      .delete()
      .match({ post_id: id, user_id: user.id });
    if (error) throw new Error();
  };

  const addLike = async () => {
    const { error } = await supabase
      .from("likes")
      .insert([{ post_id: id, user_id: user.id }])
      .single();
    if (error) throw new Error();
  };

  const clickLikeFunction = async e => {
    e.preventDefault();
    try {
      if (liked) {
        RemoveLike();
      } else {
        addLike();
      }
      loadingLike();
      countLike();
    } catch (error) {
      alert(error.message);
    }
    setLiked(!liked);
  };
  return (
    <>
      <Presenter
        liked={liked}
        likeCount={likeCount}
        onClick={e => clickLikeFunction(e)}
      />
    </>
  );
};

export default Like;
