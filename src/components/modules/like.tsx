import React from 'react'
import { supabase } from "../../util/supabase";
import styled from "styled-components";

export type LikeType = {
  id: number;
};

const Like: React.FC<LikeType> = ({ id }) => {
  const user = supabase.auth.user();
  console.log("posts.id", id);

  const clickLikeFunction = async e => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("likes")
      .insert([{ post_id: id, user_id: user.id }])
      .single();
    console.log('error', error);
    console.log("data", data);
  };
  return (
    <>
      <LikeArea>
        <Text onClick={e => clickLikeFunction(e)}>いいね</Text>
        <Count>0</Count>
      </LikeArea>
    </>
  );
};

export default Like;

const LikeArea = styled.div`
  margin-top: 5px;
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