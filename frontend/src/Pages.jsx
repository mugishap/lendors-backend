import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/car/:carId" element={<Home />} />
                    <Route path="/car/new" element={<Home />} />
                    <Route path="/car/requests" element={<Home />} />
                    <Route path="/customer/:customerId" element={<Home />} />
                    <Route path="/customers" element={<Home />} />
                    <Route path="/auth/login" element={<Home />} />
                    <Route path="/auth/signup" element={<Home />} />
                    <Route path="/customers" element={<Home />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Pages