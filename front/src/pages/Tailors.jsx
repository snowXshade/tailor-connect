import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Tailors = () => {

  const navigate = useNavigate();
  const { city } = useParams()
  const [filterTail, setFilterTail] = useState([])
  const {tailors} = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () =>{
    if (city){
      setFilterTail(tailors.filter(tail => tail.city === city))
    }else{
      setFilterTail(tailors)
    }
  }

  useEffect(()=>{
applyFilter()
  },[tailors,city])

  return (
    <div>
      <p className='text-gray-600'>Browse through the tailors</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-gray-600 text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> city === 'Jaipur'? navigate('/tailors') : navigate(`/tailors/Jaipur`)}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${city === 'Jaipur' ? "bg-indigo-100 text-black" : '' }`}>Jaipur</p>
          <p onClick={()=> city === 'Banglore'? navigate('/tailors') : navigate(`/tailors/Banglore`)} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${city === 'Banglore' ? "bg-indigo-100 text-black" : '' }`}>Banglore</p>
          <p onClick={()=> city === 'Delhi'? navigate('/tailors') : navigate(`/tailors/Delhi`)} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${city === 'Delhi' ? "bg-indigo-100 text-black" : '' }`}>Delhi</p>
          <p onClick={()=> city === 'Kolkata'? navigate('/tailors') : navigate(`/tailors/Kolkata`)} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${city === 'Kolkata' ? "bg-indigo-100 text-black" : '' }`}>Kolkata</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterTail.map((item, index) => (
                    <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-cl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
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
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tailors
