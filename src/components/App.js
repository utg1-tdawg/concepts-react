import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./Page";
import Header from "./Header";
import Invoices from "./Invoices";
import Invoice from "./Invoice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Page title="Home" />} />
          <Route path="about" element={<Page title="About" />} />
          <Route path="contact" element={<Page title="Contact" />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceNumber" element={<Invoice />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
