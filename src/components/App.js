import React, { useState } from "react";
import DisplayContainer from "./DisplayContainer";

const App = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={onButtonClick}>Increase count</button>
      <DisplayContainer count={count} />
    </div>
  );
};

export default App;
