import styled from "styled-components";

export const List = styled.ul``;
export const ListItem = styled.li<{ post_userId: number; userId: number }>`
  margin-top: 20px;
  padding: 15px;
  display: flex;
  justify-content: ${props =>
    props.post_userId == props.userId ? "flex-end" : "flex-start"};
  &:first-child {
    margin-top: 0;
  }
`;
export const Inner = styled.div`
  position: relative;
  width: 300px;
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
  margin-top: 10px;
  font-size: 14px;
`;
