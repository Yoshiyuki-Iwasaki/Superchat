import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 85%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px grey;
  box-shadow: 5px 10px 20px rgb(0 0 0 / 25%);
`;

export const Content = styled.div`
  padding: 15px;
  display:flex;
  height: calc(100% - 60px);
  box-sizing: border-box;
`;
