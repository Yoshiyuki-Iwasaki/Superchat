import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
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
      <ul>
        {chatList &&
          chatList.map((chat: any, index: number) => (
            <li key={index}>
              <Link href={`/chat/${chat.id}`} as={`chat/${chat.id}`} passHref>
                <a>
                  <p>{chat.title}</p>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </SidebarArea>
  );
};

export default Sidebar


const SidebarArea = styled.aside`
  width: calc(100% / 5);
`;