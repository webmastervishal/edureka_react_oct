import React from "react";
import { connect } from "react-redux";
import { storeValue } from "./actions";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  handleValue = (e) => {
    //dispatch an action that will store the value into the redux store
    this.props.storeValue(e.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="value"
          id="input-style"
          onChange={this.handleValue}
          value={this.props.value}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //fetch state data from redux and push the data into the component prop
  return {
    value: state.currency.value,
  };
};

const mapDispatchToProps = {
  storeValue: storeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
