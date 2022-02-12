import React from "react";
import { default as Styled } from "./style";

const Presenter = ({ handleGitHubSignIn, handleTwitterSignIn }) => {
  return (
    <Styled.Main>
      <Styled.Inner>
        <Styled.ButtonArea>
          <Styled.GitHubButton onClick={e => handleGitHubSignIn(e)}>
            GitHubログイン
          </Styled.GitHubButton>
          <Styled.TwitterButton onClick={e => handleTwitterSignIn(e)}>
            Twitterログイン
          </Styled.TwitterButton>
        </Styled.ButtonArea>
      </Styled.Inner>
    </Styled.Main>
  );
};

export default Presenter;
