import React from "react";
import Link from "next/link";
import { SidebarArea, Title, List, ListItem, LinkText } from "./style";

const Presenter = ({ chatList, router }) => {
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

export default Presenter;
