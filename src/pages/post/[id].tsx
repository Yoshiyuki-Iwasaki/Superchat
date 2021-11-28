import React from 'react'

const PostDetail = ({ showData }) => {
  console.log("showData", showData);
  return (
    <div>
      {showData.name.first} {showData.name.last}
    </div>
  );
};

export default PostDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch("https://randomuser.me/api?results=20");
  const data = await res.json();
  const showData = data.results.find(show => show.login.uuid == id);
  data.results.map(show => console.log(show.login.uuid));
  console.log(id);


  return {
    props: { showData },
  };
}