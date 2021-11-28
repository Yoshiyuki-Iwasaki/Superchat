import React from 'react'
import { supabase } from "../../components/util/supabase";

export type PostDetailType = {
  postsData: any;
};

const PostDetail: React.FC<PostDetailType> = ({ postsData }) => {
  return (
    <>
      <p>{postsData.message}</p>
    </>
  );
};

export default PostDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const posts = await supabase.from("posts").select();
  const postsData = posts.data.find(post => post.id == id);
  posts.data.map(post => console.log(post.id));

  return {
    props: { postsData },
  };
}