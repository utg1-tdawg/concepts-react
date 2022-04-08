import React from "react";

const Route = ({ path, children }) => {
  return window.location.pathname === path && children;
};

export default Route;
