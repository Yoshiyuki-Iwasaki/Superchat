import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import router from "next/router";
import Presenter from "./presenter";

const Sidebar = () => {
  const user = supabase.auth.user();
  const [chatList, setChatList] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("chat")
        .select("id, title, created_at")
        .contains("users", [user.id]);
      setChatList(data);
    };
    fetch();
  }, []);
  return <Presenter chatList={chatList} router={router} />;
};

export default Sidebar;
