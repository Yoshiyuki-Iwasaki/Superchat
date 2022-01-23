import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import styled from "styled-components";
import Link from "next/link";
import router from "next/router";

const Sidebar = () => {
  const user = supabase.auth.user();
  const [chatList, setChatList] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("chat")
        .select("id, title, created_at")
        .contains("users", [user.id]);
      setChatList(data);
    };
    fetch();
  }, []);
  return (
    <SidebarArea>
      <Title>チャット一覧</Title>
      <List>
        {chatList &&
          chatList.map((chat: any, index: number) => (
            <ListItem key={index}>
              <Link href={`/chat/${chat.id}`} as={`/chat/${chat.id}`} passHref>
                <LinkText chat_id={chat.id}>{chat.title}</LinkText>
              </Link>
            </ListItem>
          ))}
      </List>
    </SidebarArea>
  );
};

export default Sidebar;

const SidebarArea = styled.aside`
  padding: 0 10px;
  width: calc(100% / 5);
  border-right: 2px solid #2b3a42;
  box-sizing: border-box;
`;
const Title = styled.h2`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;
const List = styled.ul``;
const ListItem = styled.li``;
const LinkText = styled.a`
  padding: 10px 5px;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.chat_id == router.query.id ? "#fff" : "#2b3a42")};
  background: ${props =>
    props.chat_id == router.query.id ? "#2b3a42" : "#fff"};
`;
