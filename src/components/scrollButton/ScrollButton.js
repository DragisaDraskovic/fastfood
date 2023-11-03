import React, { useState } from 'react'

import './ScrollButton.css'
import { AiOutlineArrowUp as ArrowTop } from 'react-icons/ai'

const ScrollButton = () => {

    const [ visible, setVisible ] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' //or auto
        })
    }

    window.addEventListener('scroll', toggleVisible)
  return (
    <>
        <button className='scrollButton' style={{display: visible ? 'inline' : 'none'}}>
            <ArrowTop onClick={scrollToTop} size='20px'/>
        </button>
    </>
  )
}

export default ScrollButton