import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
const Nav = () => {
  const [search, setSearch] = useState(false);
  const [key, setKey] = useState("");
  const router = useRouter();
  console.log(router);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${key}`);
  };

  return (
    <div
      style={{
        marginBottom: "4rem",
        marginTop: "2rem",
        position:"sticky",
        top:0
      }}
    >
      <Navbar className="bg-black-900" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span
            style={{
              fontFamily: "Qwitcher Grypen",
              fontSize: "5rem",
              color: "black",
            }}
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white "
          >
            lilmashriq
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
          <Navbar.Link>
            {" "}
            <spam>
              {search ? (
                <form onSubmit={handleSubmit}>
                  <div>
                    <CloseIcon
                      onClick={() => setSearch(false)}
                      style={{
                        marginRight: "0.5rem",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                    <input
                      onChange={(e) => setKey(e.target.value)}
                      value={key}
                      placeholder="Search..."
                      style={{
                        color: "black",
                        border: "none",
                        backgroundColor: "transparent",
                        resize: "none",
                        outline: "none",
                        maxWidth: "5rem",
                      }}
                    />
                    <label style={{}}>
                      <button type="submit">
                        <SearchOutlinedIcon
                          style={{
                            cursor: "pointer",
                            color: "blue",
                          }}
                        />
                      </button>
                    </label>
                  </div>
                </form>
              ) : (
                <SearchOutlinedIcon
                  onClick={() => {
                    setSearch(true);
                  }}
                  fontSize="medium"
                  style={{ cursor: "pointer" }}
                />
              )}
            </spam>
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
