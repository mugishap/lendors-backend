import React, { useEffect, useState } from 'react'

const Login = () => {


  const backgrounds = [
    {
      url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "Get your car serviced at your doorstep"
    },

    {
      url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Rent a car on your terms"
    },
    {
      url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "Drive your dream car"
    },
    {
      url: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "We have the best cars for you"
    },
    {
      url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "Pick your car from our showroom"
    },
    {
      url: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Car for every budget"
    },
    {
      url: "https://images.unsplash.com/photo-1602777924012-f8664ffeed27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "All cars are verified"
    },

  ]
  
    const [background, setBackground] = useState(backgrounds[Math.floor(Math.random() * backgrounds.length)])
    const [formData,setFormData]=useState({
      email:"",
      password:"",
      showPassword:false
    })

  setTimeout(() => {
    const random = Math.floor(Math.random() * backgrounds.length)
    setBackground(backgrounds[random])
  }, 30000)


  useEffect(() => {
    document.title = 'Login | Drive'
  }, [])

  // const { login } = useCustomers()

  const handleLogin = async () => {
    const data = "D"
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-1/2 h-full relative flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: `url('${background.url}')` }}>
        <div className='w-full h-1/2 bg-gradient-to-t pb-12 from-black via-[#161616] to-transparent absolute bottom-0 left-0 right-0 flex items-end justify-center'>
          <span className='text-3xl font-poppins text-white font-bold'>{background.text}</span>
        </div>
      </div>
      <div className='w-1/2 bg-white flex flex-col h-full items-center justify-center'>
        <div className='rounded-2xl p-8 flex w-3/4 flex-col border-2 border-slate-200'>
          <span className='font-poppins text-2xl w-full text-center font-semibold'>Welcome Back!</span>
          <form className='flex w-full flex-col items-center justify-center' onSubmit={handleLogin}>
          {/* <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl> */}
      <button className='px-6 my-4 py-2 rounded text-white cursor-pointer bg-drive-blue font-poppins' >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login