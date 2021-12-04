import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import styled from "styled-components";
import Link from "next/link";

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
                <LinkText>{chat.title}</LinkText>
              </Link>
            </ListItem>
          ))}
      </List>
    </SidebarArea>
  );
};

export default Sidebar


const SidebarArea = styled.aside`
  width: calc(100% / 5);
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: rgb(43, 58, 66);
`;
const List = styled.ul``;
const ListItem = styled.li``;
const LinkText = styled.a`
  padding: 10px 5px;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgb(43, 58, 66);
`;