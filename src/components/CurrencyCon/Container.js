import React from "react";
import Input from "./Input";
import List from "./List";
import "./currency.css";

class Container extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Input />
        <List />
      </div>
    );
  }
}

export default Container;
