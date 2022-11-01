import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {

  const [query, setQuery] = useState('')
  const [searchedCars, setSearchedCars] = useState([])

  return (
    <div className='sticky bg-white z-3 top-0 w-screen py-3 shadow-lg flex items-center justify-around '>
      
      <div className='w-fit flex items-center justify-start'>
        <img className='w-16' src={logo} alt="Navbar logo" />
        <span className='ml-3 text-xl font-bold font-fugaz'>drive</span>
      </div>
      <div className='flex items-center justify-center w-1/3'>
        <ul className='flex'>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'home' ? 'text-blue-700':"text-black"}`}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'explore' ? 'text-blue-700':"text-black"}`}>
            <Link to={'/explore'}>Explore</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'account' ? 'text-blue-700':"text-black"}`}>
            <Link to={`/customer/${'d'}`}>Account</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'about' ? 'text-blue-700':"text-black"}`}>
            <Link to={'/about'}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex relative items-center justify-center w-3/12'>
      {
      query ?

          <div className='w-4/5 p-3 bg-white absolute right-auto bg-blue top-12 rounded shadow flex items-center justify-center'>

          </div>
          : null
      }
        <div className='flex items-center justify-center px-2 rounded-3xl border-2 border-drive-blue'>
          <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Search cars...' className='border-none rounded-xl w-10/12 outline-none font-poppins p-2' />
        </div>
      </div>
    </div>
  )
}

export default Navbar