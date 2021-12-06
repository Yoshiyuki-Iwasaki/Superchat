import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { supabase } from "../../util/supabase";
import styled from "styled-components";

export type ChatAvatarType = {
  userId: any;
};

const ChatAvatar: React.FC<ChatAvatarType> = ({ userId }) => {
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
  console.log("userData[0]", userData[0]);
  return (
    <Avatar>
      <Image src={`/avatar.png`} width={40} height={40} />
      {userData[0] && <p>{userData[0].fullname}</p>}
    </Avatar>
  );
};

export default ChatAvatar;

const Avatar = styled.div`
`;