import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("click", logCount);
  }, []);

  const logCount = () => {
    console.log("logCount", count);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return <button onClick={increaseCount}>{count}</button>;
};

export default App;
