import HeadComp from "../components/HeadComp";
import React from "react";
import NewsStyles from "../styles/NewsStyles.module.css";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "flowbite-react";

const index = ({ news }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <HeadComp title={loading ? "Loading" : "Home"}></HeadComp>

      <div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {loading && <Spinner aria-label="Default status example" />}
        </div>

        <p className="text-3xl font-bold underline">welcome to the home</p>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Link href={`haber/${news[0]._id}`}>
              <div
                onClick={() => setLoading(true)}
                className={`${NewsStyles.imaj} flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white`}
              >
                <div className={NewsStyles.box}>
                  <h3>{news[0].title} </h3>
                </div>
              </div>
            </Link>
            <Link href={`haber/${news[1]._id}`}>
              <div
                onClick={() => setLoading(true)}
                className={`${NewsStyles.imaj2} flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white`}
              >
                <div className={NewsStyles.box2}>
                  <h3>{news[1].title} </h3>
                </div>
              </div>
            </Link>
          </Carousel>
        </div>
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
