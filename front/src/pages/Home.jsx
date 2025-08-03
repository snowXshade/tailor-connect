import React from 'react'
import Header from '../components/Header'
import CityMenu from '../components/CityMenu'
import TopTailors from '../components/TopTailors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='mx-10'>
      <Header />
      <CityMenu />
      <TopTailors />
      <Banner />
    </div>
  )
}

export default Home
