import React from "react";
import Page from "./Page";
import Route from "./Route";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Page title={"Home"} />
      </Route>

      <Route path="/about">
        <Page title={"About"} />
      </Route>

      <Route path="/contact">
        <Page title={"Contact"} />
      </Route>
    </div>
  );
};

export default App;
