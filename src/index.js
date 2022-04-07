import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

const root = createRoot(document.getElementById("root"));
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
