import React from "react";
import Display from "./Display";

const DisplayContainer = ({ count }) => {
  return (
    <div>
      <Display count={count} />
      <Display count={count} />
    </div>
  );
};

export default DisplayContainer;
