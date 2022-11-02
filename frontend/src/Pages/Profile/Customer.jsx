import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'


const Customer = () => {

  const [user, setUser] = useState({
    names: 'Precieux Mugisha',
    email: 'precieuxmugisha@gmail.com',
    phone: '0782307144',
    address: 'Kigali, Rwanda',
    id: '123456789',
    profile:"data:image/png;base64,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"
  }
  )

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  const [editMode, setEditMode] = useState(false)

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start'>
      <Navbar />
      <div className='w-full  flex-col mt-24 flex items-center justify-start'>
        <div className='w-full md:w-4/5 rounded-xl p-2 md:p-6 flex md:flex-row flex-col shadow-xl'>
          <div className='profile-image w-full md:w-4/12 flex items-center justify-center'>
            <img className='rounded-full object-cover w-48 h-48' src={user.profile} alt="" />
          </div>
          <div className='flex font-poppins flex-col items-center w-full md:w-8/12'>
            <div className='text-base flex items-start pl-2 md:pl-16 justify-center w-full flex-col'>
              <div className='w-full flex my-2 sm:flex-row flex-col sm:items-center justify-between'>
                <span className='w-full sm:w-1/3 font-semibold'>Names:</span>
                {
                  editMode ?
                    <input className='w-2/3 text-sm border-drive-blue border-2 p-1 rounded' type="text" value={user.names} onChange={(e) => setUser({ ...user, names: e.target.value })} />
                    :
                    <span className='w-2/3 my-2'>{user.names}</span>}

              </div>
              <div className='w-full flex my-2 sm:flex-row flex-col sm:items-center justify-between'>
                <span className='w-full sm:w-1/3 font-semibold'>Email:</span>
                {
                  editMode ?
                    <input className='w-2/3 text-sm border-drive-blue border-2 p-1 rounded' type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    :
                    <span className='w-2/3 my-2'>{user.email}</span>}

              </div>
              <div className='w-full flex my-2 sm:flex-row flex-col sm:items-center justify-between'>
                <span className='w-full sm:w-1/3 font-semibold'>Phone Number: </span>
                {
                  editMode ?
                    <input className='w-2/3 text-sm border-drive-blue border-2 p-1 rounded' type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    :
                    <span className='w-2/3 my-2'> {user.phone}</span>}

              </div>
              <div className='w-full flex my-2 sm:flex-row flex-col sm:items-center justify-between'>
                <span className='w-full sm:w-1/3 font-semibold'>Address:</span>
                {
                  editMode ?
                    <input className='w-2/3 text-sm border-drive-blue border-2 p-1 rounded' type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                    :
                    <span className='w-2/3 my-2'>{user.address}</span>}

              </div>
           
            </div>
            <div className='my-4 flex items-center justify-center'>

              <button onClick={() => setEditMode(!editMode)} className={` ${editMode ? ' bg-red-600 ' : ' bg-drive-blue '} px-4 w-48 mx-2 hover:animate-ring py-2 rounded cursor-pointer text-white `}>{editMode ? "CANCEL" : "EDIT"}</button>
              {
                editMode && (
                  <button onClick={() => setEditMode(!editMode)} className={` bg-drive-blue px-4 w-48 mx-2 hover:animate-ring my-4 py-2 rounded cursor-pointer text-white `}>SAVE</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer