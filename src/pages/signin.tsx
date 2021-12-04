import React, { useState } from "react";
import { supabase } from "../util/supabase";
import styled from "styled-components";
import Header from "../components/modules/header";

const SignIn = () => {

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "github",
      });
      console.log('user', user);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <Main>
        <Inner>
          <button onClick={e => handleSignIn(e)}>ログイン</button>
        </Inner>
      </Main>
    </>
  );
};

export default SignIn;

const Main = styled.div``;
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
`;
const Content = styled.div`
  width: calc(100% - (100% / 5));
`;
