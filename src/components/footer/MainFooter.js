import React from 'react'

import './MainFooter.css'
import { BiSolidMap as Map } from 'react-icons/bi'
import { BsTelephone as Phone } from 'react-icons/bs'

const MainFooter = () => {
  return (
    <div className='footerContainer'>
      <div className='footerLocation'>
        <Map size='14px' color='#191a1f'/>
        <p className='textFooter'> Naša lokacija je Trg Duška Trifunovića bb</p>
      </div>
      <div className='footerPhone'>
        <Phone size='14px' color='#191a1f'/>
        <p className='textFooter'> Broj telefona je 0632211333</p>
      </div>
    </div>
  )
}

export default MainFooter