import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { storeCurrencies } from "./actions";
import Cookies from "js-cookie";

class List extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", props);
  }

  render() {
    return (
      <div>
        {this.props.currencies.map((currency) => {
          return (
            <Item
              currency={currency}
              value={this.props.value}
              key={currency.symbol}
            />
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );

    const result = await res.json();
    // console.log("result", result);
    this.props.storeCurrencies(result);
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.currency.value,
    currencies: state.currency.currencies,
  };
};

const mapDispatchToProps = {
  storeCurrencies: storeCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
