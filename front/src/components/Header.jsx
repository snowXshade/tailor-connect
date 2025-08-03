import React from 'react'
import group_profile from '../assets/group_profilepic.png'
import arrow from '../assets/right-arrow.png'
import banr from '../assets/banr.jpg'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row md:flex-wrap bg-gradient-to-b from-blue-950 to-blue-400 rounded-lg px-6 md:px-10 lg:px-20'>
            {/* ==========LEFT SIDE============ */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointments with <br className='hidden sm:block' />Professional Tailors Near You</p>
                <div className='flex flex-col lg:flex-row lg:items-center items-start  gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={group_profile} alt="profiles" />
                    <p className='w-2/3 '>Easily explore our curated list of expert tailors (near you) and book your appointment with zero hassle.</p>
                </div>
                <a href="#city" className='flex items-center gap-2 px-8 bg-white py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-3000'>
                    Book appointment <img className='w-3' src={arrow} alt="" />
                </a>

            </div>
            {/* ==========RIGHT SIDE============ */}
            <div className='md:w-1/2 relative overflow-hidden'>
                <img className='w-full md:absolute top-0 right-0  rounded-lg' style={{backgroundPosition:'bottom',}} src={banr} alt="banner" />
            </div>
        </div>
    )
}

export default Header
