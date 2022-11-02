import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import logo from './../assets/logo.png'

const Footer = () => {

    const [email, setEmail] = useState('')

    const addToNewsLetter = () => {
        toast.success("You've successfully subscribed to our newsletter", {
            autoClose: 5000,
            hideProgressBar: true,
            theme: 'colored',
            pauseOnHover: true,
            position: 'top-center'
        })
    }

    return (
        <div className='px-4 bg-[#161616]/90  py-14 text-white font-poppins w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <ToastContainer

                autoClose={5000}
                hideProgressBar={true}
                theme='colored'
                pauseOnHover={true}
                position={'top-center'}

            />
            <div className='hidden lg:flex flex-col items-center w-full'>
                <img className='' src={logo} alt="Logo" />
                <span className='text-xl font-bold font-poppins'>
                    drive
                </span>
            </div>
            <div className='my-4 flex flex-col items-start w-full'>
                <span className='text-xl font-poppins font-medium'>CONTACT US</span>
                <ul className='list-disc ml-4'>
                    <li>Phone: +250782307144</li>
                    <li>Email: precieuxmugisha@gmail.com</li>
                    <li>Location: Kigali, Rwanda</li>
                </ul>
            </div>
            <div className='my-4 flex flex-col items-start w-full'>
                <span className='text-xl font-poppins font-medium'>OUR LOCATIONS</span>
                <ul className='list-disc ml-4'>
                    <li>
                        San Fransisco
                    </li>
                    <li>
                        Miami
                    </li>
                    <li>
                        California
                    </li>
                    <li>
                        Los Angeles
                    </li>
                </ul>
            </div>
            <div className='my-4 flex flex-col items-start w-full'>
                <span className='text-xl font-poppins font-medium'>SUBSCRIBE</span>
                <span className='my-3 font-poppins font-light italic text-base'>Get updates from our weekly newsletter</span>

                <div className='flex items-center justify-between w-full'>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" className='w-3/4 px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2' placeholder='Enter your email' />
                    <button onClick={addToNewsLetter} className='bg-blue-600 text-white px-3 py-2 rounded-r-md font-poppins font-medium'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer