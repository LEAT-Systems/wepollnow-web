import React, { createContext } from "react";

const id = localStorage.getItem("uniqueID");
const UserIdContext = createContext();

export const IdProvider = ({ children }) => {
  return <UserIdContext.Provider value={id}>{children}</UserIdContext.Provider>;
};
