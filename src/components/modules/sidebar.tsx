import React, { useState, useEffect } from "react";
import { supabase } from "../util/supabase";
import styled from "styled-components";

const Sidebar = ({ users }) => {
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
    <SidebarArea>
      <h2>チャット一覧</h2>
      <form onSubmit={e => createChat(e)}>
        <input
          placeholder="title"
          value={title}
          onChange={e => setInputData({ ...inputData, title: e.target.value })}
        />
        <ul>
          {userList &&
            userList.map((doc: any, index: number) => (
              <li key={index}>
                <input
                  id={doc.id}
                  type="checkbox"
                  onChange={handleChange}
                  value={checkData}
                />
                <label htmlFor={doc.id}>{doc.fullname}</label>
              </li>
            ))}
        </ul>
        <button onClick={e => createChat(e)}>チャット作成</button>
      </form>
    </SidebarArea>
  );
};

export default Sidebar


const SidebarArea = styled.aside`
  width: calc(100% / 5);
`;