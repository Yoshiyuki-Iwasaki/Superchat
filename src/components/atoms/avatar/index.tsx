import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import { ChatAvatarType } from "./type";
import Presenter from "./presenter";

const Avatar: React.FC<ChatAvatarType> = ({ userId }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", userId);
      setUserData(data);
      if (error) throw new Error();
    } catch (error) {
      alert(error.message);
    }
  };
  return <Presenter userData={userData} />;
};

export default Avatar;
