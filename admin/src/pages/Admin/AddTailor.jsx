import React, {useContext,  useState } from 'react'
import upload from '../../assets/dressmaker1.png'
import {AdminContext} from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'


const AddTailor = () => {


    const [tailImg, setTailImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('Jaipur')
    const [specialization, setSpecialization] = useState('')
    const [experience,setExperience] = useState('1')
    const [fee, setFee] = useState('')
    const [about, setAbout] = useState('')
    const [address, setAddress] = useState('')
    const {backendUrl, atoken} = useContext(AdminContext)


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if(!tailImg){
                return toast.error('Image not selected')
            }
            const formData = new FormData()

            formData.append('image',tailImg)
            formData.append('name',name)
            formData.append('password',password)
            formData.append('email',email)
            formData.append('experience',experience)
            formData.append('fee',Number(fee))
            formData.append('city',city)
            formData.append('specialization',specialization)
            formData.append('address',address)
            formData.append('about',about)

            // console.log
            // formData.forEach((value,key)=>{
            //     console.log(`${key} : ${value}`);
            // })

            const {data} = await axios.post(backendUrl+'/api/admin/add-tailor', formData, {headers : {atoken}})
            if(data.success){
                toast.success(data.message)
                setTailImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setExperience('')
                setFee('')
                setCity('')
                setSpecialization('')
                setAddress('')
                setAbout('')
                } else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log('error in adding Tailor! ');
        }
    } 
 

    return (
        <form className='m-5 w-full' onSubmit={onSubmitHandler}>

            <p className='mb-3 text-lg font-medium'>Add Tailor</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="tailor-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={tailImg? URL.createObjectURL(tailImg) : upload} alt="" />
                    </label>
                    <input onChange={(e)=>setTailImg(e.target.files[0])} className='border rounded px-3 py-2' type="file" id='tailor-img' hidden />
                    <p>Upload tailor <br /> picture</p>
                </div>

                <div className=' flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex-col gap-1'>
                            <p>Tailor Name</p>
                            <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex-col gap-1'>
                            <p>Tailor Email</p>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex-1 flex-col gap-1'>
                            <p>Password</p>
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex-1 flex-col gap-1'>
                            <p>Experience</p>
                            <select onChange={(e)=>setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="exp">
                                <option value="1">1 years</option>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="4">4 years</option>
                                <option value="5">5 years</option>
                                <option value="6">6 years</option>
                                <option value="7">7 years</option>
                                <option value="8">8 years</option>
                                <option value="9">9 years</option>
                                <option value="10">10 years</option>
                            </select>
                        </div>

                        <div>
                            <p>Fees</p>
                            <input onChange={(e)=>setFee(e.target.value)} value={fee} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                        </div>

                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex-col gap-1'>
                            <p>City</p>
                            <select onChange={(e)=>setCity(e.target.value)} value={city} className='border rounded px-3 py-2' name="" id="city">
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Banglore">Banglore</option>
                            </select>
                        </div>

                        <div className='flex-1 flex-col gap-1'>
                            <p>Sepciality</p>
                            <input onChange={(e)=>setSpecialization(e.target.value)} value={specialization} className='border rounded px-3 py-2' type="text"  placeholder="Sepciality" id="special" />
                        </div>

                        <div className='flex-1 flex-col gap-1'>
                            <p>Address</p>
                            <input onChange={(e)=>setAddress(e.target.value)} value={address} className='border rounded px-3 py-2' type="text" placeholder='Address' required />
                        </div>
                    </div>



                </div>

                <div >
                    <p className='mt-4 mb-2'>About</p>
                    <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' type="text" placeholder='About the Tailor' row={5} required />
                </div>

                <button type='submit' className='bg-gray-700 px-10 py-3 mt-4 text-white rounded-full hover:bg-black transition-all duration-200'>Add Tailor</button>
            </div>

        </form>
    )
}

export default AddTailor
