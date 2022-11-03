import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

let CustomerContext = createContext({});

export const useCustomer = () => {
  return useContext(CustomerContext);
};

export default function CustomerProvider({ children }) {

  const {user} = useAuth();

  const baseURL = import.meta.env.VITE_SERVER_URL;

  const newRequest = async ({ formData }) => {
    console.log(formData)
    const data = await fetch(`${baseURL}/car/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return data;
  }  

  const value = { newRequest };

  return (
    <>{<CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>}</>
  );
}