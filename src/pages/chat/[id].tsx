import React, { useState ,useEffect} from 'react'
import { supabase } from "../../util/supabase";
import { formatDate } from "../../util/date"
import Layout from '../../components/modules/layout'
import styled from "styled-components";

export type ChatDetailType = {
  chatData: any;
};

const ChatDetail: React.FC<ChatDetailType> = ({ chatData }) => {
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
    <Layout>
      <Title>{chatData.title}</Title>
      <List>
        {posts &&
          posts.map((post: any, index: number) => (
            <ListItem key={index}>
              <Date>{formatDate(post.created_at)}</Date>
              <Message>{post.message}</Message>
            </ListItem>
          ))}
      </List>
      <Form onSubmit={e => createPost(e)}>
        <Input
          placeholder="message"
          value={message}
          onChange={e => handleChange(e)}
        />
        <Button onClick={e => createPost(e)}>Create Post</Button>
      </Form>
    </Layout>
  );
};

export default ChatDetail


export async function getServerSideProps(context) {
  const { id } = context.query;
  const chat = await supabase.from("chat").select();
  const chatData = chat.data.find(chat => chat.id == id);

  return {
    props: { chatData },
  };
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #2b3a42;
`;
const List = styled.ul``;
const ListItem = styled.li`
  padding: 15px;
`;
const Date = styled.p`
  font-size: 12px;
  color: #2b3a42;
`;
const Message = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #2b3a42;
`;
const Form = styled.form`
  margin-top: 20px;
`;
const Input = styled.input``;
const Button = styled.button``;