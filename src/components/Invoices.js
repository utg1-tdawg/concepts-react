import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
  let invoices = getInvoices();
  let navigate = useNavigate();

  const renderedInvoices = invoices.map((invoice) => (
    <div key={invoice.number}>
      <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
    </div>
  ));

  const onCreateInvoiceFormButtonClick = () => {
    navigate("/invoices/create-invoice-form");
  };

  return (
    <>
      <div>{renderedInvoices}</div>
      <hr />
      <button onClick={onCreateInvoiceFormButtonClick}>
        Create Invoice Form
      </button>
      <Outlet />
    </>
  );
};

export default Invoices;
