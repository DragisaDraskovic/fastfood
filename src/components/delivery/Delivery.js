import React, { useEffect, useState } from 'react'

import './Delivery.css'

import deliveryImg from '../../assets/image/Delivery - Copy.jpg'


const Delivery = () => {

  const [ flag, setFlag ] = useState(false)

  useEffect(() => {
    for(var second = 0; second < 10; second++) {
       setFlag(true)
    }
  },[])


  return (
    <div className='deliveryContainer'>
      <p className='deliveryDescriptionText'>DOSTAVU VRŠIMO U SARADNJI SA NAŠIM PARTNEROM "DOSTAVA GOCA"</p>
      <p className='deliveryDescriptionNumber'> 0631122333</p>
      {flag ? <img className='deliveryImgFirst' src={deliveryImg} /> : <img className='deliveryImgSecond' src={deliveryImg} /> }
    </div>
  )
}

export default Delivery