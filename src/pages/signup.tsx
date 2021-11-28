import React, { useState} from "react";
import { supabase } from "../components/util/supabase";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert("logged in");
      router.push('./signin');
    } catch (error) {
      alert(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={e => handleSignUp(e)}>
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
        <button type="submit" onClick={e => handleSignUp(e)}>
          SignUp
        </button>
      </form>
    </>
  );
};

export default SignUp;
