import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {backendUrl, token , setToken} = useContext(AppContext)
  const navigate = useNavigate()
  const  [state, setState] = useState('Sign Up')
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async(event) =>{
    event.preventDefault()

    try {
      
      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl+'/api/user/register',{name, email, password})

        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          console.log('error in signup fetching data');
          
        }

      }else{
        if(state === 'Login'){
        const {data} = await axios.post(backendUrl+'/api/user/login',{ email, password})

        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          console.log('error in login fetching data')
        }
      }

    }
  } catch (error) {
      console.log('error in submitting form');
      console.log(error.message);
      
    }

  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm text-zinc-600 shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create account': 'Login'}</p>
        <p >Please {state === 'Sign Up' ? 'Sign Up': 'Login'} to book appointment</p>
        {
          state ==='Sign Up' && <div className='w-full'>
          <p>Name</p>
          <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEamil(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </div>
        <button type='submit' className='bg-blue-700 text-white w-full py-2 rounded text-base hover:bg-blue-950 '>{state === 'Sign Up' ? 'Create account': 'Login'}</button>
        {
          state === 'Sign Up' 
          ? <p>Already have an account <span onClick={()=>setState('Login')}  className=' text-blue-600 cursor-pointer'>Login here</span></p> 
          : <p>Create a new account? <span onClick={()=>{setState('Sign Up')}} className=' text-blue-600 cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
