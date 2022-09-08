import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "2px solid red",
        }}
      >
        <div
          style={{
            width: "25rem",
            display: "grid",
            border: "5px solid black",
          }}
        >
          <h1>stable across different pages</h1>
          <h2>like a nav</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>

        <div
          style={{
            width: "25rem",
            display: "flex",
            border: "5px solid black",
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center",
            marginLeft: "4rem",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
