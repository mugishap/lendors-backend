import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import carImage from './../../assets/tc.png'
import * as dateFns from 'date-fns'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useCar } from '../../Context/CarContext'
import { BsArrowDownCircle, BsArrowDownCircleFill, BsArrowDownSquare } from 'react-icons/bs'

const Car = () => {
  const { carId } = useParams()

  const [car, setCar] = useState({
    name: "Tesla Model 3",
    seats: 5,
    currency: "USD",
    controls: "Automatic",
    price: 230,
    brand: "Tesla"
  })



  const [requestData, setRequestData] = useState({
    carId,
    startDate: dateFns.format(Date.now(), 'MM-d-yyy'),
    endDate: null,
    days: 0
  })

  const getCar = async () => {
    const { car } = await useCar()
  }

  useEffect(() => {
    getCar()
  }, [carId])


  useEffect(() => {
    document.title = 'Tesla Model 3 | Home'
  }, [])

  const handleRequestCar = async (e) => {
    e.preventDefault()
    toast.success('You request has been submitted successfully', {
      autoClose: 5000,
      hideProgressBar: true,
      theme: 'colored',
      pauseOnHover: true,
      position: 'top-center'
    })
    setTimeout(() => {
      window.location.replace('/explore')
    }, 6000)
  }

  return (
    <div className='w-screen flex flex-col items-center justify-between h-screen'>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        theme='colored'
        pauseOnHover={true}
        position={'top-center'}
      />
      <Navbar active="explore" />
      <div className='w-full md:w-10/12 py-12 flex flex-col px-2 md:px-12 shadow-2xl my-36 items-center'>
        <span className='text-2xl font-bold w-full text-start font-poppins'>{car.name}</span>
        <div className='w-full flex lg:flex-row flex-col items-start mt-24 justify-center'>
          <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
            <img src={carImage} className="w-4/5 rounded-lg object-cover" alt="" />
          </div>
          <div className='font-poppins flex flex-col w-full lg:w-1/2'>
            <div className='text-lg flex items-start pl-16 justify-center w-full flex-col'>
              <span className='my-2'>Name: {car.name}</span>
              <span className='my-2'>Brand: {car.brand}</span>
              <span className='my-2'>Price: {car.price} <span className='text-slate-400'>/day</span></span>
              <span className='my-2'>Currency: {car.price}</span>
              <span className='my-2'>Controls: {car.controls}</span>
              <span className='my-2'>Seats: {car.seats}</span>
            </div>
            <div className='flex items-center justify-center'>
              <Link to={`/car/${carId}/#requestCar`} className='text-center flex items-center justify-center w-52 my-4 hover:animate-ring m-auto py-3 rounded bg-drive-blue text-white cursor-pointer'>
                <button>
                Scroll Down
                </button>
                <BsArrowDownCircle className='mx-2' size={25}/>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div id='requestCar' className='w-full h-full md:w-10/12 py-12 flex flex-col px-2 md:px-12 shadow-2xl my-14 items-center justify-center'>
        <span className='text-2xl font-semibold w-full text-center font-poppins'>Request {car.name}</span>
        <form className='my-4 flex font-poppins flex-col w-6/12' onSubmit={handleRequestCar}>
          <div className='my-2 w-full flex  md:justify-between items-center md:flex-row flex-col '>
            <span>Start Date: </span>
            <div className='w-full md:w-7/12 flex'>
              <input type={"date"} className='w-full border-2 focus:outline-none border-drive-blue p-3 rounded' onChange={(e) => setRequestData({ ...requestData, startDate: e.target.value })} value={requestData.startDate} />
            </div>
          </div>

          <div className='my-2 w-full flex  md:justify-between items-center md:flex-row flex-col '>
            <span>End Date: </span>
            <div className='w-full md:w-7/12 flex'>
              <input type={"date"} className='w-full border-2 focus:outline-none border-drive-blue p-3 rounded' onChange={(e) => setRequestData({ ...requestData, endDate: e.target.value })} value={requestData.startDate} />
            </div>
          </div>
          <button type='submit' className='px-6 py-3 rounded w-52 my-4 m-auto mt-8  bg-drive-blue text-white'>FINISH</button>
        </form>

      </div>

      <Footer />
    </div>
  )
}

export default Car