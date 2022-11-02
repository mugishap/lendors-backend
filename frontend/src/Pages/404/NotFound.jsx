import React, { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NotFound = () => {

  useEffect(() => {
    document.title = '404 | Page Not Found | Drive'
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='sm:w-5/12 md:w-1/3 rounded h-1/3 sm:border-2 border-drive-blue p-8 flex items-center justify-center flex-col'>
        <span className='font-titillium text-drive-blue text-6xl  font-semibold'>404</span>
        <span className='font-poppins text-xl font-semibold'>Page Not Found</span>

        <Link className='flex items-center justify-around' to={`/`}>
          <button className='rounded flex items-center justify-around cursor-pointer px-8 pr-6 py-2 border font-light duration-75 my-6 border-drive-blue bg-white hover:bg-drive-blue text-drive-blue hover:text-white'>
            <span className='font-poppins duration-0'>
              Go Back Home
            </span>
            <BsArrowRight className='ml-4' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound