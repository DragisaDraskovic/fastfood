import React from 'react'

import './Home.css'

import FirstCarousel from '../carousel/firstCarousel/FirstCarousel'
import Magic from '../magic/Magic'

const Home = () => {
  return (
    <div className='homeContainer'>
        <h2 className='homeTitle'>Naša ponuda</h2>
        <FirstCarousel />
        <Magic />
    </div>
  )
}

export default Home