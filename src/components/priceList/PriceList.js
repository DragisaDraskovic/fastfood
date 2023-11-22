import React from 'react'

import './PriceList.css'

import priceListImg from '../../assets/image/menuLast.jpg'

const PriceList = () => {
  return (
    <div className='priceListContainer'>
      <img src={priceListImg} className='priceListImg' />
    </div>
  )
}

export default PriceList