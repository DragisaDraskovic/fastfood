import React from 'react'
import './Card.css'

const Card = ({image,text}) => {
  return (
    <div className='cardContainer'>
        <img src={image} className='imgBurger'/>
        <p className='textCard'>{text}</p>
    </div>
  )
}

export default Card