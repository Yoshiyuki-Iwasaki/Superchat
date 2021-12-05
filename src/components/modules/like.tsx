import React from 'react'
import styled from "styled-components";

const Like = () => {
  const clickLikeFunction = e => {
    e.preventDefault();
    console.log('testtest')
  };
  return (
    <>
      <LikeArea>
        <Text onClick={e => clickLikeFunction(e)}>いいね</Text>
        <Count>0</Count>
      </LikeArea>
    </>
  );
}

export default Like

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