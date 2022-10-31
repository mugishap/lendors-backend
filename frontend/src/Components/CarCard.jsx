import React from 'react'

const CarCard = (props) => {
  return (
    <div className='w-full rounded cursor-pointer  h-64 p-2 flex flex-col items-center'>
      <Link className="flex flex-col items-center">
      <img src={props.car.carImage} alt={props.car.carName} className='w-full rounded object-cover' />
      <span className='font-poppins my-1 text-black'>{props.car.carName}</span>
      <span className='font-poppins my-1 text-black'>{props.car.carPrice}</span>
      </Link>
    </div>
  )
}

export default CarCard