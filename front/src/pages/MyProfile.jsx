import React, { useState } from 'react'
import { BannerImages } from '../assets/assests'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const MyProfile = () => {

  const {userdata, setUserdata, token, backendUrl, loadUserProfile}= useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)

  const [image, setImage] = useState(false)

  const updateProfile = async () =>{
    try {
      const formData = new FormData()

      formData.append('name', userdata.name)
      formData.append('phone', userdata.phone)
      formData.append('address', userdata.address)
      formData.append('gender', userdata.gender)
      formData.append('dob', userdata.dob)

      image && formData.append('image',image)

      const {data} =await axios.post(backendUrl+'/api/user/update-profile', formData, {headers:{token}})

      if(data.success){
        console.log('data updated successfully!');    
        await loadUserProfile()
        setIsEdit(false)
        setImage(false)
      }else{
        console.log('error in sending data');     
      }
    } catch (error) {
      console.log('error in update profile function');
      console.log(error.message);
      
    }
  }

  return userdata && (
    <div className='max-w-lg flex flex-col gap-2 text-sm ml-4'>
      
      {
        isEdit 
        ? <label htmlFor='image'>
          <div className='inline-block relative cursor-pointer'>
            <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userdata.image} alt="" />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '' : BannerImages.model} alt="" />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden/>
        </label>
        : <img className='w-36 h-36 overflow-y-hidden rounded' style={{ backgroundSize: 'auto', backgroundPosition: 'center' }} src={userdata.image} alt="user Profile pic" />
      }

      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userdata.name} onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text3xl text-neutral-800 mt-4'>{userdata.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div >
        <p className='text-neutral-500 underline mt-3'>
          CONTACT INFO
        </p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
          <p className='font-medium'>Email ID:</p>
          <p className='text-blue-400'>{userdata.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userdata.phone} onChange={e => setUserdata(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userdata.phone}</p>
          }
          <p className='font-medium'>Address</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' type="text" onChange={(e) => setUserdata(prev => ({...prev, address: e.target.value}))} value={userdata.address} />
              </p>
              : <p className='text-gray-500'>{userdata.address}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFO:</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
          <p className='font-medium'>Gender : </p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              : <p className='text-gray-400'>{userdata.gender}</p>
          }
          <p className='font-medium'>Birthday: </p>
          {
            isEdit
              ? <input className='max-w-28 bg-gray-100' type="date" value={userdata.dob} onChange={e => setUserdata(prev => ({ ...prev, dob: e.target.value }))} />
              : <p className='text-gray-400'>{userdata.dob}</p>
          }
        </div>
        <div className='mt-10'>
          {
            isEdit
              ? <button className='border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300' onClick={updateProfile}>Update</button>
              : <button className='border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300' onClick={() => setIsEdit(true)}>Edit</button>
          }
        </div>
      </div>
    </div>
  )
}

export default MyProfile
