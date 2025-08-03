import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assests';
import infoIcon from '../assets/info.png'
import RelatedTailors from '../components/RelatedTailors';


const Appointment = () => {

  const { tailId } = useParams();
  const { tailors, currency, backendUrl, token, getTailorsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
  const [tailInfo, setTailInfo] = useState([])
  const [tailSlots, setTailSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const navigate = useNavigate()

  const fetchTailorInfo = async () => {
    const tailInfo = tailors.find(tail => tail._id === tailId)
    setTailInfo(tailInfo)
    // console.log(tailInfo);

  }

  const getAvailSlots = async () => {
    setTailSlots([])

    //get current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {

      //getting date with index
      let currentdate = new Date(today)
      currentdate.setDate(today.getDate() + i)

      //setting end time of date with index
      let endtime = new Date()
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10)
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentdate.setHours(10)
        currentdate.setMinutes(0)
      }

      let timeSlot = []
      while (currentdate < endtime) {
        let formatedtime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        
        //slot to array
        timeSlot.push({
          datetime: new Date(currentdate),
          time: formatedtime
        })

        //increment current time
        currentdate.setMinutes(currentdate.setMinutes() + 30)
      }
      setTailSlots(prev => ([...prev, timeSlot]))
    }
  }


  const bookAppointment = async()=> {
    if(!token){
      console.log('login to book appointment');
      return navigate('/login')
    }

  try {
    const date =  tailSlots[slotIndex][0].datetime

    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()

    const slotdate = day + " " + month + " " + year
    console.log(slotdate);
    

  } catch (error) {
    
  }

  }


  useEffect(() => {
    fetchTailorInfo()
  },[tailors,tailId])

  useEffect(() => {
    getAvailSlots()
  }, [tailInfo])

  useEffect(()=>{
console.log(tailSlots)
  },[tailSlots])

  return tailInfo && (
    <div>
      {/* -------------------tailor appontment--------------- */}

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-blue-200 w-full sm:max-w-72 rounded-lg' src={tailInfo.image} alt="" />
        </div>
        <div className='flex-1 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* tailors info */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{tailInfo.name} <img className='w-5' src={assets.verify} alt="" /></p>
          <div className=' flex item-center gap-2 mt-1 text-sm text-gray-600'>
            <p>
              {
              tailInfo?.specialization?.map((spec, i) => (
                    <span key={i} className="w-fit mr-2 inline-block border border-white py-0.5 px-2 rounded-md bg-gray-50">{spec}</span>
                ))
              }
              </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{tailInfo.experience} years</button>
          </div>
          {/* tailors about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img className='w-5' src={infoIcon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{tailInfo.description} Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee : <span className='text-emerald-400'>{currency} 50</span>
          </p>
        </div>
      </div>

      {/* =================SLOT BOOKING SECTION========================== */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            tailSlots.length && tailSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-emerald-200' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>

            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            tailSlots.length && tailSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-emerald-200' : 'text-gray-400 border border-gray-300'}`} key={index}>
                {
                  item.time.toLowerCase()
                }
              </p>
            ))
          }
        </div>
        <button onClick={bookAppointment} className='bg-emerald-200 text-black font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      {/* related tailors by city  */}
      <RelatedTailors tailorId={tailId} tailcity={tailInfo.city} />
    </div>
  )
}

export default Appointment

