import React, { useState } from 'react'
import './Navbar.css'
import { GiPalmTree as Palma } from 'react-icons/gi'
import { VscChromeClose as X } from 'react-icons/vsc'
import { animated, useSpring } from 'react-spring'

import burger from '../../assets/image/burger1.jpg'

const Navbar = () => {


  const [ isToogledMenu, setIsToogledMenuOpen ] = useState(false)

  const toogleMenuHandler = () => {
    setIsToogledMenuOpen(!isToogledMenu)
  }

  const { x } = useSpring({
    x: isToogledMenu ? 0 : 100
  })

  return (
    <>
    <div className='header'>
        <div className='menu' onClick={toogleMenuHandler}>
          <div className='burgerClass'></div>
          <div className='burgerClass'></div>
          <div className='burgerClass'></div>
        </div>
        <div className='navbarTitle'>Flamingo</div>
        <div><Palma size='40px' color='#F7E987'/></div>
    </div>
    { isToogledMenu &&
      <animated.div className='menuClass'
        style={{ transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }}>
        <div className='menuXClass'>
          <X size='30px' color='#9AA0A4' onClick={toogleMenuHandler}/>
        </div>
        <div className='menuOptions'>
          <img src={burger} className='imgBurgerMenu'/>
          <p className='menuText'>MENI</p>
          <p className='menuText'>DOSTAVA</p>
          <p className='menuText'>O NAMA</p>
          <p className='menuText'>KONTAKT</p>
        </div>
      </animated.div>
    }
    </>
  )
}

export default Navbar