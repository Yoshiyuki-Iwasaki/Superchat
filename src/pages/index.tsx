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
  const [inputData, setInputData] = useState({ title: "" });
  const [chatList, setChatList] = useState([]);
  const [checkData, setCheckData] = useState({});
  const { title } = inputData;

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

  const createChat = async () => {
    const dataPushArray = Object.entries(checkData).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
    await supabase
      .from("posts")
      .insert([{ title, user_id: user.id }])
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
      <input
        placeholder="title"
        value={title}
        onChange={e => setInputData({ ...inputData, title: e.target.value })}
      />

      <button onClick={createChat}>チャット作成</button>
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
