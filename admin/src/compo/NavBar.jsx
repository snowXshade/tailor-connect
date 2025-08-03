import React, { useState, useContext } from 'react'
import admin from '../assets/admin.png'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {

    const {atoken, setAtoken} = useContext(AdminContext);

    const navigate = useNavigate()

    const logOut = () =>{
      navigate('/')
      atoken && setAtoken('')
      atoken && localStorage.removeItem('atoken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className=' flex items-center gap-2 md:gap-4 text-xs'>
        <img className='w-10 h-10 cursor-pointer' src={admin} alt="" />
        <p className='border px-2.5  py-0.5 rounded-full border-gray500 text-gray-600'>{atoken? 'Admin' : 'Tailor'}</p>
      </div>
      <button onClick={logOut} className='bg-blue-700 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default NavBar
