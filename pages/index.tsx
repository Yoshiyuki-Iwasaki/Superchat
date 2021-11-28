import React from "react";
import Link from 'next/link'

const Home = ({ data }) => {
  return (
    <>
      <p>投稿一覧</p>
      <ul>
        {data.results.map(show => (
          <li key={show.id.name}>
            <Link as={`/post/${show.id.name}`} href={`/post?id=${show.id.name}`}>
              <a>
                {show.name.first} {show.name.last}
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
  const res = await fetch("https://randomuser.me/api?results=20");
  const data = await res.json();

  return {
    props: { data },
  };
}
