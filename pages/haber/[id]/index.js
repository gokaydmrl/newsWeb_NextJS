import Link from "next/link";
import HeadComp from "../../../components/HeadComp";

import React from "react";
import { useRouter } from "next/router";

const Haber = ({ haber }) => {
  const router = useRouter()
    console.log("hbr",router.pathname);;

  console.log("this haber", haber);
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <HeadComp title={haber[0].title}></HeadComp>

      <h3> haber</h3>

      <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">

        <h5>{haber[0].title} </h5>
        </blockquote>
      <p>{haber[0].content} </p>
      <Link href="/home">Go to Home </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  console.log("gtstprops", id);
  try {
    console.log("context", context);
    const response = await fetch(`http://localhost:3000/api/news/${id}`);
    const haber = await response.json();
    console.log("haber", haber);
    return {
      props: { haber },
    };
  } catch (error) {
    console.log("error props", error);
  }
};

export const getStaticPaths = async () => {
  const resp = await fetch(`http://localhost:3000/api/news`);
  const haberler = await resp.json();
  const ids = haberler.map((h) => h._id);
  console.log(ids);
  const paths = ids.map((id) => ({ params: { id } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};


export default Haber;
