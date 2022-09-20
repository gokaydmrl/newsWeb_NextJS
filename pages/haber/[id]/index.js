import Link from "next/link";
import HeadComp from "../../../components/HeadComp";
import useSWR, { useSWRConfig } from "swr";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card } from "flowbite-react";
import { Label } from "flowbite-react";
import { Textarea, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

const Haber = ({ haber }) => {
  const router = useRouter();

  const { mutate } = useSWRConfig();

  const [comm, setComm] = useState({
    fullName: "",
    opinion: "",
    categoryID: router.query.id,
  });

  const handleChange = (e) => {
    setComm({ ...comm, [e.target.name]: e.target.value });
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const url = "http://localhost:3000/api/comments";

  const { data, error } = useSWR(url, fetcher);

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
      mutate(url);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("data", data);

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
      {haber[0].content.split(".").map((i, a) => (
        <p style={{
          textAlign: "left",
          textIndent:"1rem"
        }} key={a}>{i}. </p>
      ))}
      <br></br>

      <br></br>
      <Link href="/home">Go to Home </Link>

      <div style={{ marginTop: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Your Name" />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="fullName"
              onChange={handleChange}
              name="fullName"
              value={comm.fullName}
            />
          </div>

          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your opinion" />
            </div>

            <Textarea
              id="comment"
              required={true}
              rows={4}
              placeholder="opinion"
              onChange={handleChange}
              name="opinion"
              value={comm.opinion}
            />
          </div>

          <Button
            style={{ marginTop: "1rem" }}
            color="purple"
            pill={true}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>

      {filtered?.map((op) => {
        return (
          <div key={op._id} className=" hover:shadow-2xl">
            <Card style={{ textAlign: "left", marginTop: "1rem" }}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {op.fullName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {op.opinion}
              </p>
              <Button
                style={{ marginLeft: "auto" }}
                color="failure"
                pill={true}
              >
                Delete
              </Button>
            </Card>
          </div>
        );
      })}
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
