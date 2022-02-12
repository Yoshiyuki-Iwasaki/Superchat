import styled from "styled-components";

export const SidebarArea = styled.aside`
  padding: 0 10px;
  width: calc(100% / 5);
  border-right: 2px solid #2b3a42;
  box-sizing: border-box;
`;
export const Title = styled.h2`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
`;
export const List = styled.ul``;
export const ListItem = styled.li``;
export const LinkText = styled.a<{ router_id: number }>`
  padding: 10px 5px;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.chat_id == props.router_id ? "#fff" : "#2b3a42")};
  background: ${props =>
    props.chat_id == props.router_id ? "#2b3a42" : "#fff"};
`;
