import React from 'react'

import './MainPage.css'

import Navbar from '../navbar/Navbar'
import FirstCarousel from '../carousel/firstCarousel/FirstCarousel'


const MainPage = () => {
  return (
    <>
        <Navbar />
        <h2 className='wellcomeText'>Dobrodošli!</h2>
        <FirstCarousel />
    </>
  )
}

export default MainPage