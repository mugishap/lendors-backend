import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  useEffect(() => {
    document.title = '404 | Page Not Found | Drive'
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-1/3 rounded h-1/3 border-2 border-drive-blue p-8 flex items-center justify-center flex-col'>
        <span className='font-poppins text-2xl font-semibold'>404</span>
        <span className='font-poppins text-xl font-semibold'>Page Not Found</span>
        <Link className="border py-2 px-3 rounded border-drive-blue">Go back Home</Link>
      </div>
    </div>
  )
}

export default NotFound