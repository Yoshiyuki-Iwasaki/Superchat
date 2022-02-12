import styled from "styled-components";

export const Main = styled.div``;
export const Inner = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const ButtonArea = styled.div`
  padding: 15px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #2b3a42;
`;
export const Button = styled.button`
  padding: 15px 20px;
  display: block;
  font-size: 14px;
  color: #f3f3f3;
  font-weight: 700;
`;

export const GitHubButton = styled(Button)`
  background: #24292f;
`;

export const TwitterButton = styled(Button)`
  margin-top: 10px;
  background: #1da1f2;
`;
