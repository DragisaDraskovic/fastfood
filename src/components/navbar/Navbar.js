import React, { useState } from 'react'
import './Navbar.css'
import { GiPalmTree as Palma } from 'react-icons/gi'
import { VscChromeClose as X } from 'react-icons/vsc'

import burger from '../../assets/image/burger1.jpg'

const Navbar = () => {


  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const opetMenu = () => {
    setIsMenuOpen(!isMenuOpen)

  }

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    <div className='header'>
        <div className='menu' onClick={opetMenu}>
          <div className='burgerClass'></div>
          <div className='burgerClass'></div>
          <div className='burgerClass'></div>
        </div>
        <div className='navbarTitle'>Flamingo</div>
        <div><Palma size='40px' color='#F7E987'/></div>
    </div>
    { isMenuOpen &&
      <div className='menuClass'>
        <div className='menuXClass'>
          <X size='30px' color='#9AA0A4' onClick={closeMenu}/>
        </div>
        <div className='menuOptions'>
          <img src={burger} className='imgBurgerMenu'/>
          <p className='menuText'>MENI</p>
          <p className='menuText'>DOSTAVA</p>
          <p className='menuText'>O NAMA</p>
          <p className='menuText'>KONTAKT</p>
        </div>
      </div>
    }
    </>
  )
}

export default Navbar