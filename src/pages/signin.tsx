import React, { useState } from "react";
import { supabase } from "../util/supabase";
import styled from "styled-components";

const SignIn = () => {

  const handleGithubSignIn = async e => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "github",
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleTwitterSignIn = async e => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "twitter",
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Main>
        <Inner>
          <ButtonArea>
            <GithubButton onClick={e => handleGithubSignIn(e)}>
              Githubログイン
            </GithubButton>
            <TwitterButton onClick={e => handleTwitterSignIn(e)}>
              Twitterログイン
            </TwitterButton>
          </ButtonArea>
        </Inner>
      </Main>
    </>
  );
};

export default SignIn;

const Main = styled.div``;
const Inner = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const ButtonArea = styled.div`
  padding: 15px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #2b3a42;
`;
const Button = styled.button`
  padding: 15px 20px;
  display: block;
  font-size: 14px;
  color: #f3f3f3;
  font-weight: 700;
`;

const GitHubButton = styled(Button)`
  background: #24292f;
`;

const TwitterButton = styled(Button)`
  margin-top: 10px;
  background: #1da1f2;
`;
