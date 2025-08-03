import React, { useState } from 'react'
import logo from '../assets/dressmaker1.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { BannerImages } from '../assets/assests'
import { assets } from '../assets/assests'

import dropdown from '../assets/dropdown.png'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate();

  const {token, setToken, userdata} = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <div className='flex flex-row items-end'>
        <img onClick={()=>navigate('/')} className='w-[70px] h-[80px] cursor-pointer' src={logo} alt="TailorConnect" />
        {/* <h3 className='text-2xl'>TailorConnect</h3> */}
      </div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-blue-700 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/tailors'>
          <li className='py-1'>TAILORS</li>
          <hr className='border-none outline-none h-0.5 bg-blue-700 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-700 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-700 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token && userdata
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 h-8 rounded-full overflow-hidden' src={userdata.image} alt="My Profile" />
              <img className='w-2.5' src={dropdown} alt="click" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 flex rounded flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
<img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu} alt="" />
{/* mobile menu */}
<div className={`${showMenu ? 'fixed w-full h-full' : 'h-0 w-0'} md:hidden right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
  <div className='flex items-center justify-between px-5 py-6'>
    <img className='w-10' src={assets.logo} alt="" />
    <img className='w-6' onClick={()=>setShowMenu(false)} src={assets.close} alt="" />
  </div>
  <ul className='flex flex-col items-center gap-3 font-medium mt-5 px-5 text-lg'>
    <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded inline-block' to='/'>Home</NavLink>
    <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded inline-block' to='/tailors'>Tailors</NavLink>
    <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded inline-block' to='/about'>About</NavLink>
    <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded inline-block' to='/contact'>Contact</NavLink>
    </ul>
</div>
      </div>
    </div>
  )
}

export default Navbar
