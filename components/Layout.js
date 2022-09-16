import React from "react";
import FooterComp from "./FooterComp";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto ">
        <Nav />
        {children}
        <FooterComp />
      </div>
    </>
  );
};

export default Layout;
