import React from 'react'
import { assets } from '../assets/assests'


const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        {/* LEFT */}
        <div >
            <img className='mb-5 w-[100px]' src={assets.logo} alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quos suscipit illum sunt? Illum numquam debitis facere delectus asperiores cum!</p>
        </div>
        {/* CENTER */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy & Policy</li>
            </ul>
        </div>
        {/* RIGHT */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-XXXXXXXXXX</li>
                <li>admin@tailorconnect.com</li>
            </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr />
        <p className=' py-5 text-sm text-center'>Copyright 2025@ TailorConnect - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
