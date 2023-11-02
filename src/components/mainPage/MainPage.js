import React from 'react'

import './MainPage.css'

import Header from '../header/Header'
import FirstCarousel from '../carousel/firstCarousel/FirstCarousel'

const MainPage = () => {
  return (
    <>
        <Header />
        <h2 className='wellcomeText'>Dobro došli!</h2>
        <FirstCarousel />
    </>
  )
}

export default MainPage