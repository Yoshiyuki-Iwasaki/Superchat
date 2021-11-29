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
  const [inputData, setInputData] = useState({ message: "" });
  const [chatList, setChatList] = useState([]);
  const { message } = inputData;

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

  const createPost = async () => {
    await supabase
      .from("posts")
      .insert([{ message, user_id: user.id }])
      .single();
    setInputData({ message: "" });
  };
  return (
    <>
      <h2>チャット一覧</h2>
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
      <h2>メッセージ一覧</h2>
      <ul>
        {posts.data.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`post/${post.id}`} as={`post/${post.id}`} passHref>
              <a>
                <p>{post.message}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <input
        placeholder="message"
        value={message}
        onChange={e => setInputData({ ...inputData, message: e.target.value })}
      />
      <button onClick={createPost}>Create Post</button>
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
