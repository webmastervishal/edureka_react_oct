import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      rollno: "",
      error: "",
    };
  }

  handleName = (e) => {
    console.log("handling...", e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  handleRollNo = (e) => {
    if (!Number(e.target.value))
      this.setState({
        error: "Please enter numbers only",
      });
    else
      this.setState({
        rollno: e.target.value,
        error: "",
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target["username"].value,
      rollno: e.target["rollno"].value,
    });
    console.log("e", e);
  };

  render() {
    return (
      <>
        <h1>Register user</h1>
        <p>Name is : {this.state.name}</p>
        <p>RollNo is : {this.state.rollno}</p>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={this.handleName}
            value={this.state.name}
          />
          <input type="text" name="rollno" />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Form;
