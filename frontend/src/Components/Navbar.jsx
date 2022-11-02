import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = (props) => {

  const [query, setQuery] = useState('')
  const [searchedCars, setSearchedCars] = useState([])
  const [searchMode, setSearchMode] = useState(false)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='sticky bg-white z-3 top-0 w-screen py-3 shadow-lg flex items-center justify-around '>


      {
        searchMode
          ?
          <div className='z-[2] w-screen bg-black/70 h-screen absolute top-0 left-0 flex flex-col'>
            <div className='absolute w-full h-screen z-[3]' onClick={() => { setSearchMode(!searchMode) }}></div>

            <div className='w-11/12 mt-4 mx-auto rounded  h-fit bg-white z-[4] flex flex-col'>
              <div className='flex px-10 w-full py-4 items-end justify-end'>
                <AiOutlineClose onClick={() => setSearchMode(!searchMode)} size={30} className='cursor-pointer' />
              </div>

              <div className='flex items-center w-10/12  m-auto justify-center px-1 rounded-3xl border-2 border-drive-blue'>
                <BsSearch className='text-slate-600' />
                <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Search cars...' className='border-none rounded-xl w-10/12 outline-none font-poppins p-2' />
              </div>
              <div className='w-full h-[30rem] flex flex-col items-center justify-start'></div>
            </div>

          </div>
          :
          null
      }

      {
        showNav
          ?
          <div className='z-[2] w-screen bg-black/70 h-screen absolute top-0 left-0 flex flex-col'>
            <div className='absolute w-full h-screen z-[3]' onClick={() => { setShowNav(!showNav) }}></div>

            <div className='w-11/12 mt-4 mx-auto rounded h-fit bg-white z-[4] flex flex-col'>
              <div className='flex px-10 w-full py-4 items-end justify-end'>
                <AiOutlineClose onClick={() => setShowNav(!showNav)} size={30} className='cursor-pointer' />
              </div>
              <ul className='flex h-[20rem] px-8 flex-col'>
                <li className={`my-3 text-lg font-poppins hover:text-drive-blue ${props.active === 'home' ? 'text-blue-700' : "text-black"}`}>
                  <Link to={'/'}>Home</Link>
                </li>
                <li className={`my-3 text-lg font-poppins hover:text-drive-blue ${props.active === 'explore' ? 'text-blue-700' : "text-black"}`}>
                  <Link to={'/explore'}>Explore</Link>
                </li>
                <li className={`my-3 text-lg font-poppins hover:text-drive-blue ${props.active === 'account' ? 'text-blue-700' : "text-black"}`}>
                  <Link to={`/customer/${'d'}`}>Account</Link>
                </li>
                <li className={`my-3 text-lg font-poppins hover:text-drive-blue ${props.active === 'about' ? 'text-blue-700' : "text-black"}`}>
                  <Link className='whitespace-nowrap' to={'/about'}>About Us</Link>
                </li>
              </ul>

            </div>

          </div>
          :
          null
      }

      <div className='w-fit flex items-center justify-start'>
        <img className='hover:rotate-45 duration-75 w-12 md:w-16' src={logo} alt="Navbar logo" />
        <span className='ml-3 text-xl hidden md:flex font-bold font-fugaz'>drive</span>
      </div>
      <div className='flex items-center justify-between md:justify-center w-1/3'>
        <ul className='hidden md:flex'>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'home' ? 'text-blue-700' : "text-black"}`}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'explore' ? 'text-blue-700' : "text-black"}`}>
            <Link to={'/explore'}>Explore</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'account' ? 'text-blue-700' : "text-black"}`}>
            <Link to={`/customer/${'d'}`}>Account</Link>
          </li>
          <li className={`mx-4 text-lg font-poppins hover:text-drive-blue ${props.active === 'about' ? 'text-blue-700' : "text-black"}`}>
            <Link className='whitespace-nowrap' to={'/about'}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex relative items-center justify-center w-3/12'>
        {
          query ?

            <div className='w-4/5 p-3  bg-white absolute right-auto bg-blue top-12 rounded shadow flex items-center justify-center'>

            </div>
            : null
        }

        <BsSearch className='flex md:hidden cursor-pointer text-xl' onClick={() => setSearchMode(!searchMode)} />
        <div className='hidden md:flex items-center justify-center px-1 rounded-3xl border-2 border-drive-blue'>
          <BsSearch className='text-slate-600' />
          <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder='Search cars...' className='border-none rounded-xl w-10/12 outline-none font-poppins p-2' />
        </div>
        <BiMenuAltRight className='text-3xl cursor-pointer md:hidden flex mx-4' onClick={() => setShowNav(!showNav)} />
      </div>
    </div>
  )
}

export default Navbar