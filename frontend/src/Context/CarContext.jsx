import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

let CarContext = React.createContext({});

export const useCar = () => {
    return useContext(CarContext);
};

export default function CarProvider({ children }) {

    const { user } = useAuth();
    const { isLoggedIn } = useAuth();
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState();

    const baseURL = import.meta.env.VITE_SERVER_URL;

    const getCars = async () => {
        const data = await fetch(`${baseURL}/car/all`);
        const cars = await data.json();
        return setCars(cars);
    }

    const getCarById = async (id) => {
        const data = await fetch(`${baseURL}/car/${id}`);
        const car = await data.json();
        setCar(car)
        return car;
    }

    const addCar = async (car) => {
        const data = await fetch(`${baseURL}/car/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });
        return data;
    }

    const deleteCar = async (id) => {
        const data = await fetch(`${baseURL}/car/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return data;
    }

    const updateCar = async (car) => {
        const data = await fetch(`${baseURL}/car/${car.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });
        return data;
    }


    const value = { cars, getCars, getCarById, addCar, deleteCar, updateCar };

    return (
        <>{<CarContext.Provider value={value}>{children}</CarContext.Provider>}</>
    );
}