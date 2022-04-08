import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
  let invoices = getInvoices();

  const renderedInvoices = invoices.map((invoice) => (
    <div key={invoice.number}>
      <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
    </div>
  ));

  return (
    <>
      <div>{renderedInvoices}</div>
      <Outlet />
    </>
  );
};

export default Invoices;
