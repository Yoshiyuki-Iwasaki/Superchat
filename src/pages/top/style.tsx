import styled from "styled-components";

const Main = styled.div``;
const Title = styled.h2`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
`;
const Form = styled.form`
  margin-top: 15px;
`;
const ChatTitle = styled.p`
  font-size: 14px;
`;
const ChatUser = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
const Input = styled.input`
  margin-top: 10px;
  font-size: 14px;
`;
const List = styled.ul`
  margin-top: 10px;
`;
const ListItem = styled.li`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input``;
const Label = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #2b3a42;
  font-size: 14px;
  color: #f3f3f3;
`;

export default {
  Main,
  Title,
  Form,
  ChatTitle,
  ChatUser,
  Input,
  List,
  ListItem,
  Checkbox,
  Label,
  Button,
};
