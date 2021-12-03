import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";

const Header = () => {
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  };
  const user = supabase.auth.user();
  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select("id, fullname, avatarurl")
        .contains("users", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);
  return (
    <>
      {/* <p>{user.email}</p> */}
      <button onClick={signOut}>ログアウト</button>
    </>
  );
};

export default Header;
