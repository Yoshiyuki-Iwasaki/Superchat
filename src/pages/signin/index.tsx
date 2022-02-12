import React, { useState } from "react";
import { supabase } from "../../util/supabase";
import { Main, Inner, ButtonArea, GitHubButton, TwitterButton } from "./styles";

const SignIn = () => {
  const handleGitHubSignIn = async e => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "github",
      });
      if (error) throw new Error();
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
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Main>
        <Inner>
          <ButtonArea>
            <GitHubButton onClick={e => handleGitHubSignIn(e)}>
              GitHubログイン
            </GitHubButton>
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
