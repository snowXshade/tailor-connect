import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tailors from './pages/Tailors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[105]'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/tailors' element={<Tailors />} />
        <Route path='/tailors/:city' element={<Tailors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments/' element={<MyAppointments />} />
        <Route path='/appointment/:tailId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
