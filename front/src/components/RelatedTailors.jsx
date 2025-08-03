import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedTailors = ({tailcity, tailorId}) => {
    const navigate = useNavigate();

    const { tailors } = useContext(AppContext);
    const [reltail, setReltail] = useState([])

    useEffect(() => {
        if (tailors.length > 0 && tailcity) {
            const taildata = tailors.filter((tail) => tail.city === tailcity && tail._id !== tailorId)
            setReltail(taildata)
            console.log();
            
        }
    }, [tailors, tailcity, tailorId])


    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Tailors from the same city</h1>
            <p className='sm:w-1/2 text-center text-sm'>Book an apponitment with Tailors near you</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {reltail.slice(0, 5).map((item, index) => (
                    <div key={index} onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-blue-200 rounded-cl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <div className='h-[40%]  overflow-hidden'>
                            <img className=' bg-blue-50' src={item.profilePic} alt="profile pic" />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name} <br /><span className='text-sm'>from : {item.city}</span></p>
                            <p className='text-gray-600 text-sm' >{
                                item.specialization.map((spec, i) => (
                                    <span key={i} className="w-fit mr-2 mt-2 inline-block px-2 rounded-md bg-gray-200">{spec}</span>
                                ))}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedTailors
