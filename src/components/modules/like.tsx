import React from 'react'
import styled from "styled-components";

const Like = () => {
  return (
    <>
      <LikeArea>
        <Text>いいね</Text>
        <Count>0</Count>
      </LikeArea>
    </>
  );
}

export default Like

const LikeArea = styled.div`
  display: flex;
`;
const Text = styled.button`
  font-size: 12px;
  color: #2b3a42;
`;
const Count = styled.p`
  font-size: 12px;
  color: #2b3a42;
`;