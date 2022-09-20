import React from "react";
import FooterComp from "./FooterComp";
import HeaderPhoto from "./HeaderPhoto";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="md:container md:mx-auto lg:px-1 px-4">
        <HeaderPhoto />
        <Nav />
        {children}
        <FooterComp />
      </div>
    </>
  );
};

export default Layout;
