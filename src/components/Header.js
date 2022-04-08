import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/invoices">Invoices</Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default Header;
