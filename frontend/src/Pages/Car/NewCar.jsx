import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Navbar from "../../Components/Navbar";
import { BiEdit, BiUpload } from 'react-icons/bi'
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

  const previewFile = () => {
    const input = document.querySelector('#carImage')
    const file = input.files[0]
    const reader = new FileReader()

    reader.addEventListener('loadend', () => {
      setCarInfo({ ...carInfo, imageStr: reader.result })
    })
    reader.readAsDataURL(file)
  }

  const onDrop = () => {

  }

  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <Navbar />
      <div className="form mt-12 w-full flex flex-col items-center justify-center">
        <div className="p-6 w-4/5 rounded flex items-center justify-center">
          <div className="w-1/2 flex flex-col">
            <span className="text-2xl font-bold font-poppins">Car Details</span>
            <form onSubmit={handleSubmit}>
              <input type="file" name="car-image" id="carImage" className="hidden" onChange={previewFile} />
            </form>
          </div>
          <div className="p-4 w-1/2 flex items-center justify-center">
            <Dropzone
              accept={{ "image/*": [] }}
              onDrop={onDrop}
              multiple={false}

            >
              {
                ({ getRootProps, getInputProps }) => (
                  <div className="w-full h-full border-4 border-dashed border-slate-500 flex items-center justify-center">
                    {
                      carInfo.imageStr ?
                        <div className="w-4/5 h-4/5 rounded relative flex items-center justify-center">
                          <img src={carInfo.imageStr} alt="Uploaded Image" />
                          <div className="absolute right-2 top-2 flex items-center justify-center">
                            <label htmlFor="carImage" className="p-3 rounded-full text-white">
                              <BiEdit />
                            </label>
                          </div>
                        </div>
                        :
                        <label htmlFor="carImage" className="w-full h-full items-center justify-center">
                          <BiUpload className="text-3xl" />
                        </label>
                    }
                  </div>
                )
              }
            </Dropzone>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
