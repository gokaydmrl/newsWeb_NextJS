import Link from "next/link";
import Script from "next/script";
import React from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div
      style={{
        marginBottom: "4rem",
        marginTop: "2rem",
      }}
    >
      <Navbar className="bg-black-900" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
            LilMashriq
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/home"
            active={router.pathname.startsWith("/home") && true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            active={router.pathname.startsWith("/about") && true}
          >
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">by</Navbar.Link>
          <Navbar.Link href="/navbars">Gökay</Navbar.Link>
          <Navbar.Link href="/navbars"> Demirel</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
