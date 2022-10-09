import React, { Component } from "react";
import { Link } from "react-router-dom";

const MasterLayout = (props) => {
  //   console.log("props", props.children);

  return (
    <div>
      <header>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/hooks">Hooks</Link>
      </header>
      <section>{props.children}</section>
      <footer>&copy; edureka 2022</footer>
    </div>
  );
};

export default MasterLayout;
