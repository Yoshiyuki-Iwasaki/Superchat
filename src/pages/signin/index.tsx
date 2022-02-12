import React, { useState } from "react";
import { supabase } from "../../util/supabase";
import Presenter from "./presenter";

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
    <Presenter
      handleGitHubSignIn={handleGitHubSignIn}
      handleTwitterSignIn={handleTwitterSignIn}
    />
  );
};

export default SignIn;
