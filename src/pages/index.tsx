import React, { useState, useEffect} from "react";
import Link from "next/link";
import {
  supabase
} from "../components/util/supabase";

export type HomeType = {
  posts: any;
  chat: any;
};

const Home: React.FC<HomeType> = ({ posts }) => {
  const user = supabase.auth.user();
  const [chatList, setChatList] = useState([]);

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

  return (
    <>
      <h2>チャット一覧</h2>
      <button onClick={(e)=>console.log(e)}>チャット作成</button>
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
