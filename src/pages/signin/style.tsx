import styled from "styled-components";

const Main = styled.div``;
const Inner = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const ButtonArea = styled.div`
  padding: 15px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #2b3a42;
`;
const Button = styled.button`
  padding: 15px 20px;
  display: block;
  font-size: 14px;
  color: #f3f3f3;
  font-weight: 700;
`;

const GitHubButton = styled(Button)`
  background: #24292f;
`;

const TwitterButton = styled(Button)`
  margin-top: 10px;
  background: #1da1f2;
`;

export default { Main, Inner, ButtonArea, Button, GitHubButton, TwitterButton };
