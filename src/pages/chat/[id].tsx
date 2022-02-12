import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import Presenter from "./presenter";

type ChatDetailType = {
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = ({ chatData }) => {
  return <Presenter chatData={chatData} />;
};

export default ChatDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);

  return {
    props: { chatData },
  };
}
