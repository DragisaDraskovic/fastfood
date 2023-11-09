import React from 'react'

import './FoodCard.css'

const FoodCard = ({ title ,image, description}) => {
  return (
    <div className='foodCardContainer'>
        <p className='foodCardTitle'>{title}</p>
        <img src={image} className='foodCardImg' />
        <p className='foodCardDescription'>{description}</p>
    </div>
  )
}

export default FoodCard