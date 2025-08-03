import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const TopTailors = () => {

    const navigate = useNavigate();
    const {tailors} = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Tailors to Book</h1>
            <p className='sm:w-1/2 text-center text-sm'>Book an apponitment with our Top Tailors</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {tailors.slice(0, 5).map((item, index) => (
                    <div key={index} onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-cl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <div className='h-[40%]  overflow-hidden'>
                            <img className=' bg-blue-50' src={item.profilePic} alt="profile pic" />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name} <br /><span className='text-sm'>from : {item.city}</span></p>
                            <p className='text-gray-600 text-sm' >{
                                item.specialization}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/tailors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        </div>
    )
}

export default TopTailors
