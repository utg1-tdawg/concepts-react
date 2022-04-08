import React, { useState, useEffect } from "react";

const Route = ({ path, children, isDefault }) => {
  const [toRender, setToRender] = useState(isDefault);
  useEffect(() => {
    window.addEventListener("popstate", determineToRender);
  }, []);

  const determineToRender = () => {
    setToRender(window.location.pathname === path);
  };

  return toRender && children;
};

Route.defaultProps = {
  isDefault: false,
};

export default Route;
