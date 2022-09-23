import React from "react";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "@tanstack/react-query";
import fetcher from "../../query/fetchDataQuery";

const key = () => {
  const queryClient = new QueryClient();
  const router = useRouter();

  const { isLoading, data } = useQuery(["news"], fetcher);
  console.log("search data", data);
  console.log("router", router);

  const filteredData = data?.filter((n) => {
    return n.title.includes("lebanon");
  });

  return (
    <div>
      {" "}
      <h3> well this page is searching for {router.query.key}</h3>{" "}
      <p>{isLoading ? "Loading" : filteredData[0].title} </p>
    </div>
  );
};

export default key;
