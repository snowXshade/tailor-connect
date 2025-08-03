import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './compo/NavBar';
import SideBar from './compo/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTailor from './pages/Admin/AddTailor';
import TailorsList from './pages/Admin/TailorsList';

const App = () => {

  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments/>} />
          <Route path='/add-tailor' element={<AddTailor />} />
          <Route path='/tailor-list' element={<TailorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
