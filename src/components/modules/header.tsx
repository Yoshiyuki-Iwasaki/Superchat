import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image'

const Header = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState([]);
  const router = useRouter();

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
          <Hover>
            <Avatar>
              <AvatarImage>
                <Image src={`/avatar.png`} width={50} height={50} />
              </AvatarImage>
              {userList[0] && (
                <p>{userList[0].fullname ? userList[0].fullname : "noname"}</p>
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

const HeaderLayout = styled.header`
  background: #2b3a42;
`;
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  height: 60px;
`;
const Title = styled.h1``;
const Logo = styled.a`
  font-size: 26px;
  font-weight: 700;
  color: #f3f3f3;
`;
const RightArea = styled.div``;
const AvatarImage = styled.figure`
  border-radius: 25px;
`;
const Avatar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const LinkText = styled.a``;
const Button = styled.button`
  padding: 5px 10px;
  background: #f3f3f3;
`;
const Hover = styled.div`
  position: relative;
`;
const List = styled.ul`
  position: absolute;
  top: 50px;
  right: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s;

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    right: 25px;
    width: 8px;
    height: 8px;
    border-top: 1px solid gray;
    border-right: 1px solid gray;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  ${Hover}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
const ListItem = styled.li``;