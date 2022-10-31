import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";

let AuthContext = React.createContext({});

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {

    let [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const baseURL = process.env.SERVER_URL;

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
      //console.log(error);
      return null;
    }
  };

  const logout = async () => {
    const data = await axios.get(`${baseURL}/auth/logout`);
    return data;
  };

  const login = async ({ formData }) => {7
    console.log(formData)
    const data = await axios.post(`${baseURL}/auth/login`, formData);
    return data;
  };

  let value = { user, logout, getUserById, login };

  return (
    <>{<AuthContext.Provider value={value}>{children}</AuthContext.Provider>}</>
  );
}