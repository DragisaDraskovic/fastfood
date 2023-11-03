import React from 'react'

import './MainPage.css'

import Navbar from '../navbar/Navbar'
import FirstCarousel from '../carousel/firstCarousel/FirstCarousel'
import Magic from '../magic/Magic'
import MainFooter from '../footer/MainFooter'


const MainPage = () => {
  return (
    <>
        <Navbar />
        <h2 className='wellcomeText'>Dobrodošli!</h2>
        <FirstCarousel />
        <Magic />
        <MainFooter />
    </>
  )
}

export default MainPage