import React, { useState, useEffect} from "react";
import Link from "next/link";
import { supabase } from "../components/util/supabase";
import Layout from '../components/modules/layout';

export type HomeType = {
  users: any;
};

const Home: React.FC<HomeType> = ({ users }) => {
  const user = supabase.auth.user();
  const [chatList, setChatList] = useState<any>([]);

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
    <Layout users={users}>
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
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const users = await supabase.from("users").select();
  return {
    props: { users },
  };
}
