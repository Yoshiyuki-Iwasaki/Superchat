import React, { useState } from "react";
import { supabase } from "../components/util/supabase";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("logged in");
      router.push("./");
    } catch (error) {
      alert(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={e => handleSignIn(e)}>
        <label htmlFor="email">
          <span>email</span>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={e => handleSignIn(e)}>
          SignIn
        </button>
      </form>
    </>
  );
};

export default SignIn;
