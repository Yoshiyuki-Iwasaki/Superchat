import React, { useState, useEffect } from "react";
import { supabase } from "../../util/supabase";
import { HomeType } from "./type";
import Presenter from "./presenter";

const Home: React.FC<HomeType> = ({ users }) => {
  const [inputData, setInputData] = useState<any>({ title: "" });
  const [userList, setUserList] = useState<any>([]);
  const [checkData, setCheckData] = useState<any>({});
  const { title } = inputData;

  useEffect(() => {
    const fetch = async () => {
      setUserList(users.data);
    };
    fetch();
  }, []);

  const createChat = async e => {
    if (!title) return;
    e.preventDefault();
    const dataPushArray = Object.entries(checkData).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
    const { data, error } = await supabase
      .from("chat")
      .insert([{ title, users: dataPushArray }])
      .single();
    setInputData({ title: "" });
  };

  const handleChange = e => {
    setCheckData({
      ...checkData,
      [e.target.id]: e.target.checked,
    });
  };
  return (
    <Presenter
      createChat={createChat}
      title={title}
      inputData={inputData}
      checkData={checkData}
      setInputData={setInputData}
      userList={userList}
      handleChange={handleChange}
    />
  );
};

export default Home;

export async function getServerSideProps() {
  const users = await supabase.from("users").select();
  return {
    props: { users },
  };
}
