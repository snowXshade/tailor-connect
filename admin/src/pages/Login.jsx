import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {

  const [state,setState] = useState('Admin');
  const {setAtoken, backendUrl} =  useContext(AdminContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if(state === 'Admin'){
        const {data} = await axios.post(backendUrl+'/api/admin/login', {email, password})
        if(data.success){
          // console.log(data.token);
          localStorage.setItem('atoken', data.token);
          setAtoken(data.token)
        } else{
          toast.error('Invalid credentials!')
        }
      } else {
        console.log('tailor credentials..... section');
        
      }
    } catch (error) {
      console.log('error in login no admin no tailor');
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className=' min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 mx-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
      <p className=' text-xl font-semibold m-auto'><span>{state} </span>Login</p>
      <div className='w-full'>
        <p>Email</p>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required/>
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
      </div>
      <button className='bg-blue-700 cursor-pointer text-white hover:bg-blue-800 border border-blue-800 rounded w-full p-2 mt-1'>Login</button>
      
      {
        state ==='Admin'
        ? <p>Tailor Login? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Tailor')}>Click here </span> </p> 
        : <p>Admin Login? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Admin')}>Click here </span> </p>
      }

      </div>
    </form>
  )
}

export default Login
