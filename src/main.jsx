import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.createRoot(document.getElementById("root"));
// Store immutable obyekt olmalidir

const initialStore = {
  users: [],
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "getusers":
    default:
      return store;
  }
};

const store = createStore(reducer);
// deprecated - kohnelmis
createRoutesFromElements.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
