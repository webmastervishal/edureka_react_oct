import React from "react";
import CounterUI from "./CounterUI";

class Container extends React.Component {
  constructor() {
    super();
    //initializing the state
    this.state = {
      count: 100,
    };
    //to bind the functions
    this.increment = this.increment.bind(this);

    console.log("calling constructor....");
  }

  static getDerivedStateFromProps() {
    console.log("calling getDerivedStateProps...");
  }

  shouldComponentUpdate() {
    console.log("calling shouldComponentUpdate...");
    return false;
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("calling render...");
    return (
      <CounterUI
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }

  getSnapshotBeforeUpdate() {
    console.log("calling getsnapshot before update...");
  }

  componentDidUpdate() {
    console.log("calling componentdid update...");
  }

  componentDidMount() {
    console.log("calling compnoentdidmount...");
  }
}

export default Container;
