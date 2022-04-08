import React, { useEffect } from "react";

const Link = ({ path, pageName }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, null, path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={path} onClick={onLinkClick}>
      {pageName}
    </a>
  );
};

export default Link;
