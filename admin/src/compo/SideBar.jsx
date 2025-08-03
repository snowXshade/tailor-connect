import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const {atoken} = useContext(AdminContext);

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        atoken && <ul className='text-blue-800 mt-5'>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-gray-50 border-r-4 border-blue-800': ''}`} to={'/admin-dashboard'}>
                {/* <img src="" alt="" /> */}
                <p>Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-gray-50 border-r-4 border-blue-800': ''}`} to={'/all-appointments'}>
                {/* <img src="" alt="" /> */}
                <p>All Appointments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-gray-50 border-r-4 border-blue-800': ''}`} to={'/add-tailor'}>
                {/* <img src="" alt="" /> */}
                <p>Add Tailor</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-gray-50 border-r-4 border-blue-800': ''}`} to={'/tailor-list'}>
                {/* <img src="" alt="" /> */}
                <p>Tailors List</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default SideBar
