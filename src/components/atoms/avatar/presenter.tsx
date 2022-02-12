import React from "react";
import Image from "next/image";
import { Avatar, Username } from "./style";

const Presenter = ({ userData }) => {
  return (
    <Avatar>
      {/* <Image src={`/avatar.png`} width={40} height={40} /> */}
      {userData[0] && <Username>{userData[0].fullname}</Username>}
    </Avatar>
  );
};

export default Presenter;
