import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { supabase } from "../../util/supabase";

export type ChatAvararType = {
  userId: any;
};

const ChatAvarar: React.FC<ChatAvararType> = ({ userId }) => {
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
  console.log('userId', userId);
  console.log('userData', userData);
  return (
    <>
      <Image src={`/avatar.png`} width={40} height={40} />
      {/* <p>{userData[0].fullname}</p> */}
    </>
  );
};

export default ChatAvarar;
