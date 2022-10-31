import React, { useEffect } from 'react'
import Navbar from './../../Components/Navbar'

const Home = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div className='w-screen flex flex-col items-center justify-center h-fit bg-white'>
<Navbar />
    </div>
  )
}

export default Home