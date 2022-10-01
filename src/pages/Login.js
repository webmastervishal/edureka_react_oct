import React from "react";
import "./login.css";
import Cookies from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };

    const isAuthenticated = !!Cookies.get("token");
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
  }

  handleEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();

    //hit the api and get back the token
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );

    const result = await res.json();
    console.log("result", result);

    //handle error
    if (result.status == 401) {
      this.setState({ ...this.state, error: "Email/password is invalid" });
    }

    //handle success
    if (result.status != 401) {
      //save token
      Cookies.set("token", result.access_token);
      //redirect user
      this.props.history.push("/dashboard");
    }
    //clear the input fields
    this.setState({ ...this.setState, email: "", password: "" });
  };

  render() {
    const inputStyle = {
      display: "block",
      width: "80%",
      height: "30px",
      margin: "10px",
    };

    // console.log("state", this.state);

    return (
      <div
        style={{
          border: "1px solid #c7c7c7",
          padding: "10px",
          margin: "auto",
          width: "50%",
        }}
      >
        <p>{this.state.error}</p>

        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Please enter email address"
            className="input-style"
            onChange={this.handleEmail}
            value={this.state.email}
          />
          <input
            type="text"
            name="password"
            placeholder="Please enter password"
            className="input-style"
            onChange={this.handlePassword}
            value={this.state.password}
          />
          <button
            id="login-button"
            style={{
              backgroundColor: "red",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
