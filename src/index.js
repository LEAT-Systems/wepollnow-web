import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LabelPluginProvider from "./Components/Layout/Admin/Dashboard/Charts/LabelPluginProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <LabelPluginProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </LabelPluginProvider> */}
  </StrictMode>
);
