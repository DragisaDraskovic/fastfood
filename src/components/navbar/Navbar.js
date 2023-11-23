import React, { useState } from 'react'
import './Navbar.css'
import { GiPalmTree as Palma } from 'react-icons/gi'
import { VscChromeClose as X } from 'react-icons/vsc'
import { animated, useSpring } from 'react-spring'
import { useNavigate } from 'react-router'

import burger from '../../assets/image/burger1.jpg'

const Navbar = () => {


  const [ isToogledMenu, setIsToogledMenuOpen ] = useState(false)
  const navigate = useNavigate()


  const toogleMenuHandler = () => {
    setIsToogledMenuOpen(!isToogledMenu)
  }

  const { x } = useSpring({
    x: isToogledMenu ? 0 : 100
  })

  const style = useSpring({
    to: {
      transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }
  })

  return (
    <>
    <div className='header'>
        <div className='menu' onClick={toogleMenuHandler}>
          <div className='burgerClassLine'></div>
          <div className='burgerClassLine'></div>
          <div className='burgerClassLine'></div>
        </div>
        <div className='navbarTitle' onClick={() => navigate('/home')}>Flamingo</div>
        <div className='palmIcon'><Palma size='40px' color='#F7E987' onClick={() => navigate('/home')}/></div>
    </div>
    { isToogledMenu &&
      <animated.div className='menuClass'
        style={style}
        >
        <div className='menuXClass'>
          <X size='30px' color='#9AA0A4' onClick={toogleMenuHandler}/>
        </div>
        <div className='menuOptions'>
          <img src={burger} className='imgBurgerMenu'/>
          <p className='menuText' onClick={() => { navigate('/home'); toogleMenuHandler() }}>POČETNA</p>
          <p className='menuText' onClick={() => { navigate('/pricelist'); toogleMenuHandler() }}>MENI</p>
          <p className='menuText' onClick={() => { navigate('/delivery'); toogleMenuHandler() }}>DOSTAVA</p>
          <p className='menuText' onClick={() => { navigate('/about'); toogleMenuHandler() }}>O NAMA</p>
          <p className='menuText' onClick={() => { navigate('/contact'); toogleMenuHandler() }}>KONTAKT</p>
        </div>
      </animated.div>
    }
    </>
  )
}

export default Navbar