import React from 'react'
import {BannerImages} from '../assets/assests'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

      <div className='my-10 flex flex-col md:flex-row  gap-12'>
        <img className='w-full md:max-w-[36vw]' src={BannerImages.model} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>We are a team of tech enthusiasts passionate about solving real-world problems through modern technology. With a strong focus on user experience and inclusivity, we aim to bridge the gap between skilled tailors and digitally connected customers across India.</p>
          <p>TailorConnect was created to bring the tailoring industry online—making it easier for users to discover and book appointments with reliable tailors nearby, while empowering tailors to grow through online visibility and secure digital tools.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To become India’s most trusted and accessible platform for tailoring services, combining technology, trust, and convenience in one place.</p>
        </div>
      </div>
      <div className='text-xl m-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-emerald-100 transition-all duration-200 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Instantly connect with verified tailors across India and manage bookings with ease.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-emerald-100 transition-all duration-200 cursor-pointer'>
          <b>Convenience:</b>
          <p>Book appointments, make payments, and get confirmations—all from one seamless platform.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-emerald-100 transition-all duration-200 cursor-pointer'>
          <b>Personalization:</b>
          <p>Get tailor suggestions based on your needs, preferences, and location.</p>
        </div>
      </div>
    </div>
  )
}

export default About
