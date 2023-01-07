import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { ModalFormProvider } from "./ModalFormContextAdmin/ModalFormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ModalFormProvider>
        <App />
      </ModalFormProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
