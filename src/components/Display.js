import React from "react";
import CountContext from "../contexts/CountContext";

const Display = () => {
  return (
    <div>
      <CountContext.Consumer>{(count) => count}</CountContext.Consumer>
    </div>
  );
};

export default Display;
