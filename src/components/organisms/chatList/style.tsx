import styled from 'styled-components';

export const List = styled.ul`
  height: calc(100% - 68px);
  overflow: scroll;
`;
export const ListItem = styled.li<{ post_userId: number; userId: number }>`
  margin-top: 10px;
  padding: 10px 10px 40px 10px;
  display: flex;
  justify-content: ${(props) =>
    props.post_userId == props.userId ? 'flex-end' : 'flex-start'};
  border: 1px solid #333;
  width: 300px;

  &:first-child {
    margin-top: 0;
  }
`;
export const Inner = styled.div`
  position: relative;
`;
export const ListHeader = styled.div`
  display: flex;
`;
export const RightArea = styled.div`
  margin-left: 10px;
`;
export const Date = styled.p`
  font-size: 11px;
`;
export const Message = styled.p`
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.4;
`;
