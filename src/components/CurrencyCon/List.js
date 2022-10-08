import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { fetchCurrencies } from "./actions";
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
    this.props.fetchCurrencies();
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.currency.value,
    currencies: state.currency.currencies,
  };
};

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
