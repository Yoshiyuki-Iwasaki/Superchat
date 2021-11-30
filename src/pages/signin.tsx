import React, { useState } from "react";
import { supabase } from "../components/util/supabase";
import { useRouter } from "next/router";

const SignIn = () => {

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "twitter",
      });
      if (error) throw error;
      alert("logged in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={e => handleSignIn(e)}>
        SignIn
      </button>
    </>
  );
};

export default SignIn;
