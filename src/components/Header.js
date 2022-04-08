import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div>
      <Link path="/" pageName="Home" />
      <br />
      <Link path="/about" pageName="About" />
      <br />
      <Link path="/contact" pageName="Contact" />
    </div>
  );
};

export default Header;
