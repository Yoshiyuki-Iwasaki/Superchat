import React from 'react'

const PostDetail = () => {
  return (
    <div>投稿詳細</div>
  )
}

export default PostDetail;

export async function getServerSideProps(context) {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  const content = data.map(entry => entry.show);

  return {
    shows: content,
  };
};