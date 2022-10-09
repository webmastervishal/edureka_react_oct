import React from "react";
import useTitle from "../../hooks/useTitle";

function Increment() {
  const [count, setCount] = useTitle(10);

  return (
    <button onClick={() => setCount(count + 1)}>Increment : {count}</button>
  );
}

export default Increment;
