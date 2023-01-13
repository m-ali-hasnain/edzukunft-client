import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
