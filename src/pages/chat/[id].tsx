import React, { useState ,useEffect} from 'react'
import { supabase } from "../../components/util/supabase";
import { formatDate } from "../../components/util/date"
import Layout from '../../components/modules/layout'

export type ChatDetailType = {
  chatData: any;
  users: any;
};

const ChatDetail: React.FC<ChatDetailType> = ({ chatData, users }) => {
  const user = supabase.auth.user();
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState({ message: "" });
  const { message } = inputData;

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("chat_id", chatData.id);
      setPosts(data);
    };
    fetch();
  }, []);

  const createPost = async e => {
    if (!message) return;
    e.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ message, user_id: user.id, chat_id: chatData.id }])
      .single();
    setInputData({ message: "" });
  };

  const handleChange = e => {
    setInputData({ ...inputData, message: e.target.value });
  };

  return (
    <Layout users={users}>
      {chatData.title}
      <ul>
        {posts &&
          posts.map((post: any, index: number) => (
            <li key={index}>
              <p>{formatDate(post.created_at)}</p>
              <p>{post.message}</p>
            </li>
          ))}
      </ul>
      <input
        placeholder="message"
        value={message}
        onChange={e => handleChange(e)}
      />
      <button onClick={e => createPost(e)}>Create Post</button>
    </Layout>
  );
};

export default ChatDetail


export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);
  const users = await supabase.from("users").select();

  return {
    props: { chatData, users },
  };
}