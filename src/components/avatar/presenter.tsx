import React from "react";
import { Avatar, Username } from "./style";

const Presenter = ({ userData }) => {
  return (
    <Avatar>
      {userData[0] && <Username>{userData[0].fullname}</Username>}
    </Avatar>
  );
};

export default Presenter;
