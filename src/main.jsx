import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "./reducers/usersReducer.js";
import { createStore } from "redux";

const rootElem = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer);
// deprecated - kohnelmis

rootElem.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
