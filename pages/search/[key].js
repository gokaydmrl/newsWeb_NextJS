import React from "react";
import { useRouter } from "next/router";

const key = () => {
  const router = useRouter();

  console.log("router", router);
  return <div>well this page is searching for {router.query.key} </div>;
};

export default key;
