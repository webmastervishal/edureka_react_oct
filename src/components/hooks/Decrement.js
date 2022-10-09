import React from "react";
import useTitle from "../../hooks/useTitle";

function Decrement() {
  const [count, setCount] = useTitle(-10);

  return (
    <button onClick={() => setCount(count - 1)}>Decrement : {count}</button>
  );
}

export default Decrement;
