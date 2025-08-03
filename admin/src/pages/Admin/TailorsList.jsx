import React from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const TailorsList = () => {

  const { tailors, getAllTailors, atoken, changeAvailabiity} = useContext(AdminContext)

  useEffect(() => {
    if (atoken) {
      console.log('authenticated');
      if (atoken) {
        getAllTailors()
      }

    }
  }, [atoken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className=' text-lg font-medium'>All Tailors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          tailors.map((item,index)=>(
            <div className='border border-indigo-200 rounded-xl max-w-36 overflow-hidden cursor-pointer'>
              <img className='bg-indigo-50 group-hover:bg-blue-400 transition-all duration-200' src={item.image} alt="tailors image" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.specialization}</p>
                <p className='text-zinc-600 text-sm'>{item.city}</p>
                <div>
                  <input onChange={()=>changeAvailabiity(item._id)} type="checkbox" checked={item.available}/>
                  <p>available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default TailorsList
