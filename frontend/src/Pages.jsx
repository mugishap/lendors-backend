import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Explore from './Pages/Explore/Explore.jsx'
import Car from './Pages/Car/Car.jsx'
import Requests from './Pages/Request/Requests.jsx'
import Login from './Pages/Auth/Login.jsx'
import Signup from './Pages/Auth/Signup.jsx'
import Customer from './Pages/Profile/Customer.jsx'
import Customers from './Pages/Profile/Customers.jsx'
import NewCar from './Pages/Car/NewCar.jsx'
import NotFound from './Pages/404/NotFound.jsx'

const Pages = () => {
   
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                    <Route path="/car/:carId" element={<Car />} />
                    <Route path="/car/new" element={<NewCar />} />
                    <Route path="/car/requests" element={<Requests />} />
                    <Route path="/customer/:customerId" element={<Customer />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Pages