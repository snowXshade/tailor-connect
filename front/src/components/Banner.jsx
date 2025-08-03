import React from 'react'
import { BannerImages } from '../assets/assests'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='flex bg-blue-200 rounded-lg pl-6 sm:pl-10 md:pl-14 lg:pl-12 m-auto w-4/5'>
            {/* =======LEFT SIDE====== */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-xl md:text-2xl w-1/2 lg:text-3xl font-semibold text-white'>
                    <p>Book Appointments</p>
                    <p className='mt-4'>With Tailors Near You</p>
                </div>
                <button className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300' onClick={()=>{navigate('/login'); scrollTo(0,0)}}>
                    Create account
                </button>
            </div>
            {/* =====RIGHT SIDE====== */}
            <div className='hidden md:block px-2 md:w-1/2 lg:w-[370px] relative '>
                <img className='h-[115%] absolute bottom-0 right-0 mx-8 max-w-md' src={BannerImages.unfit} alt="" />
            </div>
        </div>
    )
}

export default Banner
