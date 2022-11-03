import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

let AdminContext = createContext({});

export const useAdmin = () => {
  return useContext(AdminContext);
};

export default function AdminProvider({ children }) {

  const [admin, setAdmin] = useState([]);

  const baseURL = import.meta.env.VITE_SERVER_URL;

  const adminLogin = async ({ formData }) => {
    console.log(formData)
    const data = await fetch(`${baseURL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setAdmin(data.user);
    return data;
  }

  const value = { adminLogin, admin };

  return (
    <>{<AdminContext.Provider value={value}>{children}</AdminContext.Provider>}</>
  );
}