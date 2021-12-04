import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
import router from "next/router";
import styled from "styled-components";
import Header from "../components/modules/header";

const Profile = () => {
  const user = supabase.auth.user();
  const [inputData, setInputData] = useState({ username: "" });
  const { username } = inputData;

    useEffect(() => {
      const fetch = async () => {
        const { data, error } = await supabase
          .from("profile")
          .select()
          .eq("id", user.id);
        if (data != undefined) router.push("/");
        console.log("data", data);
        console.log("user.id", user.id);
      };
      fetch();
    }, []);

  const createProfile = async (e) => {
    e.preventDefault();
    if (!username) return;
    await supabase
      .from("profile")
      .insert([{ id: user.id, username, avatar_url: '', }]);
    setInputData({ username: "" });
  }
  return (
    <>
      <Header />
      <Main>
        <Inner>
          <input
            placeholder="username"
            value={username}
            onChange={e =>
              setInputData({ ...inputData, username: e.target.value })
            }
          />
          <button onClick={e => createProfile(e)}>プロフィール作成</button>
        </Inner>
      </Main>
    </>
  );
}

export default Profile

const Main = styled.div``;
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
`;