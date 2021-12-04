import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
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
          <button onClick={signOut}>ログアウト</button>
        </RightArea>
      </Inner>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header``;
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
  font-size: 18px;
  font-weight: 700;
`;
const RightArea = styled.div``;