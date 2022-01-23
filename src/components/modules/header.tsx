import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useMyUserInfo from "../../hooks/useMyUserInfo";

const Header = () => {
  const { MyUserInfoData, isLoading } = useMyUserInfo();
  const router = useRouter();

  console.log("MyUserInfoData", MyUserInfoData);

  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  };

  if (isLoading) return <p>ロード中です</p>;
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
              <Image src={`/avatar.png`} width={40} height={40} />
              {
                <UserName>
                  {/* {MyUserInfoData.fullname ? MyUserInfoData.fullname : "noname"} */}
                </UserName>
              }
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
  padding: 0 15px;
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
const Hover = styled.div`
  position: relative;
  cursor: pointer;
`;
const List = styled.ul`
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
const ListItem = styled.li`
  border-top: 1px solid #2b3a42;

  &:first-child {
    border-top: none;
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
const UserName = styled.p`
  margin-right: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #f3f3f3;
`;
const LinkText = styled.a`
  padding: 10px;
  text-align: center;
  width: 200px;
  display: inline-block;
  background: #f3f3f3;
  font-size: 13px;
`;
const Button = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  background: #f3f3f3;
  cursor: pointer;
  font-size: 13px;
`;
