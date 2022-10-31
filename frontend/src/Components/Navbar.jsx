import React from 'react'
import logo from './../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen shadow-lg flex items-center justify-around'>
      <div className='w-1/3 flex items-center justify-center'>
        <img src={logo} alt="Navbar logo" />
      </div>
      <div className='flex items-center justify-center w-1/3'>
        <ul className='flex'>
          <li><Link></Link></li>
        </ul>
      </div>
      <div className='flex items-center justify-center w-1/3'></div>
    </div>
  )
}

export default Navbar