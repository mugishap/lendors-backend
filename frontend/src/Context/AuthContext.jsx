import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie, setCookie } from "../utils/cookies";

let AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);
  const baseURL = import.meta.env.VITE_SERVER_URL;

  const decodeToken = async () => {
    const token = getCookie("token");
    if (token) {
      try {
        const userDetails = await jwtdecode(token);
        //console.log(userDetails);
        const userd = await getUserById(userDetails.userid);
        return setUser(userd);
      } catch (err) {
        return setUser(undefined);
      }
    }
    return setUser(undefined);
  };

  const getUserById = async (id) => {
    try {
      return {};
    } catch (error) {
      console.log(error);
      return { messag: error };
    }
  };

  const logout = async () => {
    deleteAllCookies();
    setUser(undefined);
    setIsLoggedIn(false);
  };

  const signup = async ({ formData }) => {
    const data = await fetch(`${baseURL}/customer/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return data;
  }

  const login = async ({ formData }) => {

    console.log(formData)
    const data = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setCookie('drive_usr_token',data.token,7)
    setIsLoggedIn(true);
    return data;
  };

  let value = { user, logout, signup, decodeToken, getUserById, login };

  return (
    <>{<AuthContext.Provider value={value}>{children}</AuthContext.Provider>}</>
  );
}