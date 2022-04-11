import React, { useContext } from "react";
import CountContext from "../contexts/CountContext";

const Display = () => {
  const countContext = useContext(CountContext);
  return <div>{countContext}</div>;
};

export default Display;
