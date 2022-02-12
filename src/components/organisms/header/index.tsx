import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import { useRouter } from "next/router";
import useDarkMode from "./hooks";
import Presenter from "./presenter";

const Header = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select()
        .eq("id", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);

  const signOut = () => {
    supabase.auth.signOut();
    router.push("./signin");
  };

  return (
    <Presenter
      setTheme={setTheme}
      theme={theme}
      userList={userList}
      signOut={signOut}
    />
  );
};

export default Header;
