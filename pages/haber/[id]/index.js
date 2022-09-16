import Link from "next/link";
import HeadComp from "../../../components/HeadComp";
import useSWR from "swr";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Haber = ({ haber }) => {
  const router = useRouter();

  const [comm, setComm] = useState({
    fullName: "",
    opinion: "",
    categoryID: router.query.id,
  });

  const handleChange = (e) => {
    setComm({ ...comm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("comment", comm);
    try {
      // console.log("bak", JSON.stringify(comm));
      console.log("başarılı post");
      console.log("post içinde", comm);
      const res = await fetch("http://localhost:3000/api/comments/post", {
        method: `POST`,
        body: JSON.stringify(comm),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const url = "http://localhost:3000/api/comments";

  const { data, error } = useSWR(url, fetcher);

  console.log("data", data);

  console.log("hbr", router.query);

  console.log("this haber", haber);

  const filtered = data?.filter((c) => {
    return c.categoryID === router.query.id;
  });

  console.log("filtered", filtered);

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <HeadComp title={haber[0].title}></HeadComp>

      <h3> haber</h3>

      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
        <h5>{haber[0].title} </h5>
      </blockquote>
      <p>{haber[0].content} </p>
      <br></br>
      {filtered?.map((op) => {
        return (
          <div key={op._id}>
            <p>{op.fullName} </p>
            <p>{op.opinion} </p>
          </div>
        );
      })}
      <br></br>
      <Link href="/home">Go to Home </Link>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="fullName"
            onChange={handleChange}
            name="fullName"
            value={comm.fullName}
          />
          <input
            placeholder="opinion"
            onChange={handleChange}
            name="opinion"
            value={comm.opinion}
          />
          <button>submit</button>
        </form>
      </div>
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
