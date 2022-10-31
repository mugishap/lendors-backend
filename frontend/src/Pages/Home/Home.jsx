import React, { useEffect } from 'react'
import Navbar from './../../Components/Navbar'
import { carsObject } from './../../utils/sampledata'
import CarCard from './../../Components/CarCard'

const Home = () => {
  console.log(carsObject)
  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div className='w-screen flex flex-col items-center justify-center h-fit bg-white'>
      <Navbar />
      <span className='px-4 text-2xl font-medium font-poppins my-8 w-full text-start'>Discover best cars for your journey,</span>
      <div className="mt-4 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {
          carsObject.map((car, index) => <CarCard key={index} car={car} />
          )
        }
      </div>
    </div>
  )
}

export default Home