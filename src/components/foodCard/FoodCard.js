import React from 'react'

import './FoodCard.css'

const FoodCard = ({ title ,image, description}) => {
  return (
    <div className='foodCardContainer'>
        <img src={image} className='foodCardImg' />
        <p className='foodCardTitle'>{title}</p>
        <p className='foodCardDescription'>{description}</p>
    </div>
  )
}

export default FoodCard