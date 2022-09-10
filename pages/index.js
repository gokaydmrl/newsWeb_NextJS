import HeadComp from "../components/HeadComp";
import React from "react";

const index = ({ news }) => {
  return (
    <>
      <HeadComp title="Home"></HeadComp>

      <div>
        <h1>Home</h1>
        <p>welcome to the home</p>
        {news.map((n) => {
          return (
            <div key={n._id}>
              <h3>{n.title} </h3>
              <p>{n.content} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/news`);
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
};
