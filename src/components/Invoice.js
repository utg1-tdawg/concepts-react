import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const Invoice = () => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceNumber, 10));

  return (
    <div>
      <div>Number: {invoice.number}</div>
      <div>Name: {invoice.name}</div>
      <div>Amount: {invoice.amount}</div>
      <div>Due: {invoice.due}</div>
    </div>
  );
};

export default Invoice;
