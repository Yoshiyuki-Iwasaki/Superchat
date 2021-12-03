import React, { useState } from "react";
import { supabase } from "../components/util/supabase";

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
      <button onClick={e => handleSignIn(e)}>ログイン</button>
    </>
  );
};

export default SignIn;
