import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { backgrounds } from './../../utils/sampledata'
import { useAuth } from '../../Context/AuthContext';

const Signup = () => {

  const [background, setBackground] = useState(backgrounds[Math.floor(Math.random() * backgrounds.length)])
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    address: "",
    telephone: "",
    password: "",
    showPassword: false
  })

  setTimeout(() => {
    const random = Math.floor(Math.random() * backgrounds.length)
    setBackground(backgrounds[random])
  }, 30000)


  useEffect(() => {
    document.title = 'Create account | Drive'
  }, [])

  const { signup, login } = useAuth()

  const createCustomerAccount = async (e) => {
    e.preventDefault()

    const data = await signup({ formData })

    if (data.message === "Account created successfully") await login({ formData })

  }

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-1/2 h-full relative hidden lg:flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: `url('${background.url}')` }}>
        <div className='w-full h-1/2 bg-gradient-to-t pb-2 from-black to-transparent absolute bottom-0 left-0 right-0 flex items-end justify-center'>
          <span className='text-3xl font-poppins text-white font-bold'>{background.text}</span>
        </div>
      </div>
      <div style={{ backgroundImage: `url('https://customer.elephantsql.com/img/square_bg.png')`}} className='bg-no-repeat bg-cover w-full lg:w-1/2 bg-white flex flex-col h-full items-center justify-center'>
        <div className='rounded-2xl p-8 flex w-11/12 md:w-7/12 flex-col items-center border-2 border-slate-200'>
          <img src={logo} alt="" />
          <span className='font-poppins text-2xl my-4 w-full text-center font-semibold'>Welcome To Drive!</span>
          <form className='my-3 flex w-full px- md:px-4 h-fit py-2 flex-col items-center justify-center' onSubmit={createCustomerAccount}>

            <input onChange={(e) => { setFormData({ ...formData, names: e.target.value }) }} className="my-2 h-12 font-poppins border-2 outline-none border-drive-blue p-2 rounded w-full" type="text" placeholder="Names" />
            <input onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} className="my-2 h-12 font-poppins border-2 outline-none border-drive-blue p-2 rounded w-full" type="email" placeholder="Email" />
            <input onChange={(e) => { setFormData({ ...formData, telephone: e.target.value }) }} className="my-2 h-12 font-poppins border-2 outline-none border-drive-blue p-2 rounded w-full" type="tel" placeholder="Telephone" />
            <input onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }} className="my-2 h-12 font-poppins border-2 outline-none border-drive-blue p-2 rounded w-full" type="text" placeholder="Address" />

            <div className='flex items-center justify-between rounded border-2 border-drive-blue w-full p-2 my-2'>
              <input type={formData.showPassword ? 'text' : 'password'} placeholder={'Password'} value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} className="border-none outline-none w-11/12" />
              <span className='text-slate-600 w-1/12'>
                {
                  formData.showPassword
                    ?
                    <Visibility onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} />
                    :
                    <VisibilityOff onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} />
                }
              </span>
            </div>
            <button className='px-8 my-4 py-2 rounded text-white cursor-pointer bg-drive-blue font-poppins' >Signup</button>
          </form>
          <span className='font-poppins font-light flex items-center justify-center'>
            <span>Got an account? {" "}</span>&nbsp;
            <Link className="text-drive-blue hover:underline cursor-pointer" to={'/auth/login'}>Login</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signup