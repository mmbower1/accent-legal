import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "antd/dist/antd.css";
import App from "./App";
import "./languages/Languages.js";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
