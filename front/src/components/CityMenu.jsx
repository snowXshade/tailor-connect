import React from 'react'
import { City } from '../assets/assests'
import { Link } from 'react-router-dom'

const CityMenu = () => {
  return (
    <div id='city' className='flex flex-col items-center gap-4 py-16 text-gray-600'>
      <h1 className='text-3xl font-medium'>Find by City</h1>
      <p className='w-1/3 text-center text-sm'>Easily explore our curated list of expert tailors (near you) and book your appointment with zero hassle.</p>
      <div className='flex sm:justify-center gap-4 pt-5 overflow-scroll'>
        {
            City.map((item,index)=>(
               <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/tailors/${item.city}`}>
                <div className='w-24 h-24 sm:w-20 sm:h-20 m-2 overflow-hidden rounded-full hover:scale-[110%] transition-all duration-500'>
                  <img className='h-full w-full ' src={item.image} alt="image" />
                </div>
                <p>{item.city}</p>
               </Link>
            ))
        }
      </div>
    </div>
  )
}

export default CityMenu
