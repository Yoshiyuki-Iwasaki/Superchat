import React from 'react'
import styled from "styled-components";

const Like = () => {
  return (
    <>
      <Text>いいね</Text>
      <Count>0</Count>
    </>
  );
}

export default Like

const Text = styled.button`
  font-size: 14px;;
  color: #2b3a42;
`;
const Count = styled.p`
  font-size: 14px;
  color: #2b3a42;
`;