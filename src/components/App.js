import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [dummy, setDummy] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    window.addEventListener("click", logCount);
  }, []);

  const logCount = () => {
    console.log("logCount", count.current);
  };

  const increaseCount = () => {
    count.current += 1;
    setDummy(dummy + 1);
  };

  return <button onClick={increaseCount}>{count.current}</button>;
};

export default App;
