import Head from "next/head";
import React from "react";

const HeadComp = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadComp;
