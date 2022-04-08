import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./Page";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/about" element={<Page title="About" />} />
        <Route path="/contact" element={<Page title="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
