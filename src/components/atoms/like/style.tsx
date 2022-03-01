import styled from 'styled-components';

export const LikeButton = styled.button<{ liked: boolean }>`
  padding: 0.5rem 0.5rem 0.5rem 2.3rem;
  position: absolute;
  background: ${({ liked }) => (liked ? 'red' : 'gray')};
  bottom: -30px;
  left: 0;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: white;

  &:before {
    position: absolute;
    content: '♡';
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
