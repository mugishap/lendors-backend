import React from 'react'
import {logo} from './../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-full flex items-center justify-around'>
            <div className='flex flex-col items-center w-1/4'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='flex flex-col items-center w-1/4'></div>
            <div className='flex flex-col items-center w-1/4'></div>
            <div className='flex flex-col items-center w-1/4'></div>
        </div>
    )
}

export default Footer