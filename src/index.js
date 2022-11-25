import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { IdProvider } from "./Components/Forms/FormContext/userIdContext";
import { AuthProvider } from "./AuthProvider";
import { ModalFormProvider } from "./ModalFormContextAdmin/ModalFormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <IdProvider>
          <ModalFormProvider>
            <App />
          </ModalFormProvider>
        </IdProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
