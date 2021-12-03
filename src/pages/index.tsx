import React, { useState, useEffect} from "react";
import Link from "next/link";
import { supabase } from "../components/util/supabase";
import Header from "../components/modules/header";
import router from 'next/router'

export type HomeType = {
  posts: any;
  chat: any;
};

const Home: React.FC<HomeType> = ({ posts }) => {
  const user = supabase.auth.user();
  const [inputData, setInputData] = useState<any>({ title: "" });
  const [chatList, setChatList] = useState<any[]>([]);
  const [userList, setUserList] = useState<any[]>([]);
  const [checkData, setCheckData] = useState<any>({});
  const { title } = inputData;

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("chat")
        .select("id, title, created_at")
        .contains("users", [user.id]);
      setChatList(data);
      const { userData, userDataError }: any = await supabase
        .from("users")
        .select("id, fullname, avatarurl")
      setUserList(userData);
    };
    fetch();
  }, []);

  const createChat = async () => {
    if (!title) return;
    const dataPushArray = Object.entries(checkData).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
    await supabase
      .from("posts")
      .insert([{ title, user_id: dataPushArray }])
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
    <>
      <Header />
      <h2>チャット一覧</h2>
      <form onSubmit={createChat}>
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
        <button onClick={createChat}>チャット作成</button>
      </form>
      <ul>
        {chatList &&
          chatList.map((chat: any, index: number) => (
            <li key={index}>
              <Link href={`chat/${chat.id}`} as={`chat/${chat.id}`} passHref>
                <a>
                  <p>{chat.title}</p>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const posts = await supabase.from("posts").select();
  return {
    props: { posts },
  };
}
