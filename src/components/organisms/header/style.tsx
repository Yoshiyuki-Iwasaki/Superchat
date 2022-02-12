import styled from "styled-components";

export const HeaderLayout = styled.header`
  background: #2b3a42;
`;
export const Inner = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  height: 60px;
`;
export const Title = styled.h1``;
export const Logo = styled.a`
  font-size: 26px;
  font-weight: 700;
  color: #f3f3f3;
`;
export const RightArea = styled.div`
  display: flex;
  align-items: center;
`;
export const Hover = styled.div`
  position: relative;
  cursor: pointer;
`;
export const List = styled.ul`
  position: absolute;
  top: 50px;
  right: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s;

  ${Hover}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
export const ListItem = styled.li`
  border-top: 1px solid #2b3a42;

  &:first-child {
    border-top: none;
  }
`;
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
export const UserName = styled.p`
  margin-right: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #f3f3f3;
`;
export const LinkText = styled.a`
  padding: 10px;
  text-align: center;
  width: 200px;
  display: inline-block;
  background: #f3f3f3;
  font-size: 13px;
`;
export const Button = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  background: #f3f3f3;
  cursor: pointer;
  font-size: 13px;
`;

export const DarkmodeButton = styled.button`
  margin-right: 20px;
  font-size: 20px;
`;
