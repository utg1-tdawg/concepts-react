import React from "react";

const Link = ({ path, pageName }) => {
  return <a href={path}>{pageName}</a>;
};

export default Link;
