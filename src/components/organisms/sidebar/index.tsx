import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import Link from "next/link";
import router from "next/router";
import { SidebarArea, Title, List, ListItem, LinkText } from "./style";

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
                <LinkText router_id={router.query.id} chat_id={chat.id}>
                  {chat.title}
                </LinkText>
              </Link>
            </ListItem>
          ))}
      </List>
    </SidebarArea>
  );
};

export default Sidebar;
