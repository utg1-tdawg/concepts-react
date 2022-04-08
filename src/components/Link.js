import React, { useEffect } from "react";

const Link = ({ path, pageName }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, null, path);
  };
  return (
    <a href={path} onClick={onLinkClick}>
      {pageName}
    </a>
  );
};

export default Link;
