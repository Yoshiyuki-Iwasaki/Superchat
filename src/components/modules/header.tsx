import React from 'react'
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  }
  const user = supabase.auth.user();
  return (
    <>
      <p>{user.email}</p>
      {/* <button onClick={signOut}>ログアウト</button> */}
    </>
  );
}

export default Header
