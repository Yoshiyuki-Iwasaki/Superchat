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

  return (
    <>
      <Main>
        <Inner>
          <ButtonArea>
            <Button onClick={e => handleGithubSignIn(e)}>Githubログイン</Button>
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
  max-width: 1000px;
`;
const ButtonArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
const Button = styled.button`
  padding: 5px 10px;
  background: #24292f;
`;
