import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  };
  const user = supabase.auth.user();
  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select("id, fullname, avatarurl")
        .contains("users", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);
  console.log('userList', userList);
  return (
    <HeaderLayout>
      <Inner>
        <Title>
          <Link href="/" as="/" passHref>
            <Logo>Superchat</Logo>
          </Link>
        </Title>
        <RightArea>
          {/* <p>{user.email}</p> */}
          <Button onClick={signOut}>ログアウト</Button>
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
const Button = styled.button`
  padding: 5px 10px;
  background: #f3f3f3;
`;