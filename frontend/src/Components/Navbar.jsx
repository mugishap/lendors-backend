import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [query, setQuery] = useState('')

  return (
    <div className='w-screen py-3 shadow-lg flex items-center justify-around'>
      <div className='w-fit flex items-center justify-start'>
        <img className='w-16' src={logo} alt="Navbar logo" />
        <span className='ml-3 text-xl font-bold'>Drive</span>
      </div>
      <div className='flex items-center justify-center w-1/3'>
        <ul className='flex'>
          <li className='mx-4 text-lg font-poppins hover:text-drive-blue'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='mx-4 text-lg font-poppins hover:text-drive-blue'>
            <Link to={'/explore'}>Explore</Link>
          </li>
          <li className='mx-4 text-lg font-poppins hover:text-drive-blue'>
            <Link to={`/customer/${'d'}`}>Account</Link>
          </li>
          <li className='mx-4 text-lg font-poppins hover:text-drive-blue'>
            <Link to={'/about'}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center w-3/12'>
        <div className='flex items-center justify-center px-2 rounded-3xl border-2 border-drive-blue'>
          <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Search cars...' className='border-none rounded-xl outline-none font-poppins p-2' />
        </div>
      </div>
    </div>
  )
}

export default Navbar