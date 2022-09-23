import HeadComp from "../components/HeadComp";
import React from "react";
import NewsStyles from "../styles/NewsStyles.module.css";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import fetcher from "../query/fetchDataQuery";

const index = (props) => {
  console.log("props", props.data);
  const [loading, setLoading] = useState(false);

  // const fetcher = async () => {
  //   try {
  //     console.log("fetchre çalıştı");
  //     const reso = await fetch("http://localhost:3000/api/news");
  //     const responso = await reso.json();
  //     console.log("res", reso);
  //     return responso;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const { isLoading, isSuccess, data } = useQuery(["news"], fetcher);

  console.log("data hom", data);

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

        <p className="text-3xl font-bold underline">
          welcome to the home {isLoading && "aaaaaaaaaaaaaaaaaaaaaa"}{" "}
        </p>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Link href={`haber/${!isLoading && data[0]._id}`}>
              <div
                onClick={() => setLoading(true)}
                className={`${NewsStyles.imaj} flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white`}
              >
                <div className={NewsStyles.box}>
                  <h3>{!isLoading && data[0].title} </h3>
                </div>
              </div>
            </Link>
            <Link href={`haber/${!isLoading && data[1]._id}`}>
              <div
                onClick={() => setLoading(true)}
                className={`${NewsStyles.imaj2} flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white`}
              >
                <div style={{ opacity: "1" }} className={NewsStyles.box2}>
                  <h3>{!isLoading && data[1].title} </h3>
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

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/news`);
//     const news = await res.json();
//     console.log("news", news);
//     return {
//       props: {
//         news,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getStaticrops = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(["news"], fetcher);
    return { props: { dehydratedState: dehydrate(queryClient) } };
  } catch (error) {
    console.log(error);
  }
};
