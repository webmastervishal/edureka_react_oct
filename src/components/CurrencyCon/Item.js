import React from "react";

const Item = (props) => {
  return (
    <div id="item-style">
      <p>
        {props.currency.symbol} {props.currency.name}
      </p>
      <p>{props.currency.rate}</p>
      <p>{(props.currency.rate * props.value).toFixed(2)}</p>
    </div>
  );
};

export default Item;
