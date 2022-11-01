import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

const CarCard = (props) => {
  return (
    <div className='w-10/12 my-6 z-1 hover:z-1 bg-white duration-300 rounded shadow-lg hover:scale-105 cursor-pointer h-[26rem] flex flex-col items-center'>
      <img src={props.car.image} alt={props.car.name} className='w-full rounded-t h-52 object-cover' />
      <div className='flex flex-col p-2'>

        <span className='font-poppins my-1 text-black'>{props.car.name}</span>
        <span className='font-poppins font-light my-1 text-slate-500'>{props.car.description}</span>

        <div className='font-poppins w-full flex items-center justify-between'>
          <Link className='flex items-center justify-around' to={`/car/${props.car.id}`}>
            <button className='rounded flex items-center justify-around cursor-pointer px-8 pr-6 py-2 border font-light duration-75 my-6 border-drive-blue bg-white hover:bg-drive-blue text-drive-blue hover:text-white'>
              <span className='duration-0'>
                Rent Car
              </span>
              <BsArrowRight className='ml-4' />
            </button>
          </Link>
          <div className='flex items-center justify-around'>
            <div className='flex items-center justify-center'>
              <FiHeart onClick={() => props.car.likes++} />
              <span className='font-light text-sm ml-2 text-slate-500'>{props.car.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard