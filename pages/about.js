import HeadComp from "../components/HeadComp";
import React from "react";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();

  console.log("router", router);
  return (
    <div>
      <HeadComp title="About"></HeadComp>

      <h3 className="underline">
        in the process of creating, by Gökay Demirel
      </h3>
    </div>
  );
};

export default about;
