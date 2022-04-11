import React, { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import CountContext from "../contexts/CountContext";

const App = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={onButtonClick}>Increase count</button>
      <CountContext.Provider value={count}>
        <DisplayContainer />
      </CountContext.Provider>
    </div>
  );
};

export default App;
