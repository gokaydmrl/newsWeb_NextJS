import HeadComp from "../components/HeadComp";
import React from "react";
import NewsStyles from "../styles/NewsStyles.module.css";
import { Carousel } from "flowbite-react";
import Link from "next/link";

const index = ({ news }) => {
  return (
    <>
      <HeadComp title="Home"></HeadComp>

      <div>
        <h1 className="underline">Home</h1>
        <p className="text-3xl font-bold underline">welcome to the home</p>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Link href={`haber/${news[0]._id}`}>
              <div
                className={`${NewsStyles.imaj} flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white`}
              >
                <div className={NewsStyles.box}>
                  <h3>{news[0].title} </h3>
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
