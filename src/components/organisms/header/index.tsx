import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useDarkMode from "./hooks";
import {
  HeaderLayout,
  Inner,
  Title,
  Logo,
  RightArea,
  DarkmodeButton,
  Hover,
  Avatar,
  UserName,
  List,
  ListItem,
  LinkText,
  Button,
} from "./style";

const Header = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select()
        .eq("id", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);

  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  };

  return (
    <HeaderLayout>
      <Inner>
        <Title>
          <Link href="/" as="/" passHref>
            <Logo>Superchat</Logo>
          </Link>
        </Title>
        <RightArea>
          <DarkmodeButton onClick={setTheme}>
            {theme.type === "light" ? "🌚" : "🌝"}
          </DarkmodeButton>
          <Hover>
            <Avatar>
              <Image src={`/avatar.png`} width={40} height={40} />
              {userList[0] && (
                <UserName>
                  {userList[0].fullname ? userList[0].fullname : "noname"}
                </UserName>
              )}
            </Avatar>
            <List>
              <ListItem>
                <Link href="/profile/edit" as="/profile/edit" passHref>
                  <LinkText>プロフィール編集</LinkText>
                </Link>
              </ListItem>
              <ListItem>
                <Button onClick={signOut}>ログアウト</Button>
              </ListItem>
            </List>
          </Hover>
        </RightArea>
      </Inner>
    </HeaderLayout>
  );
};

export default Header;
