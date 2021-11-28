import React, { useState} from "react";
import Link from "next/link";
import {
  supabase
} from "../components/util/supabase";

export type HomeType = {
  posts: any;
};

const Home: React.FC<HomeType> = ({ posts }) => {
  const [inputData, setInputData] = useState({ message: "" });
  const { message } = inputData;

  const createPost = async () => {
    await supabase.from("posts").insert([{ message }]).single();
    setInputData({ message: "" });
  };
  return (
    <>
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
