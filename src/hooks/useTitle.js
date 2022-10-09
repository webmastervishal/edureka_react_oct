import React, { useState, useEffect, useDebugValue } from "react";

function useTitle(initialCount) {
  const [count, setCount] = useState(initialCount);

  useDebugValue(count);

  useEffect(() => {
    document.title = `Count is ${count}`;
  });

  return [count, setCount];
}

export default useTitle;
