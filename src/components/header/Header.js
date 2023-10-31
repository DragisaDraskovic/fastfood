import React from 'react'
import './Header.css'
import { GiPalmTree as Palma } from 'react-icons/gi'

const Header = () => {
  return (
    <div className='header'>
        <div className='menu'></div>
        <div>Flamingo</div>
        <div><Palma size='40px' color='#F7E987'/></div>
    </div>
  )
}

export default Header