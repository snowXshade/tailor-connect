import React from 'react'
import {BannerImages} from '../assets/assests'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center gap-10 md:flex-row gap-10mb-28 text-sm'>
        <img className='w-full md:max-w-[36vw] lg:w-[360px]' src={BannerImages.model2} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 font-light'>54709 Willims street <br /> Suit 350, WC DC , USA</p>
          <p className='text-gray-500 font-light'>Tel: +91- XXXXXXXXXX <br />Email: admin@tailorconnect.com</p>
          <p className='font-semibold text-md text-gray-600'>JOIN US</p>
          <p className='text-gray-500 font-light'>Explore job opennings</p>
          <button className='border border-black text-black px-8 py-4 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300'>JOIN</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
