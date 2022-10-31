import React, { useState } from "react";
import Navbar from "../../Components/Navbar";

const NewCar = () => {
  const [carInfo, setCarInfo] = useState({
    name: "",
    imageStr: "",
    isUrl: false,
    description: "",
    price: null,
    currency: "USD",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carInfo);
  };

  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <Navbar />
      <div className="form mt-12 w-full flex flex-col items-center justify-center">
        
      </div>
    </div>
  );
};

export default NewCar;
