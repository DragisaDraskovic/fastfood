import React from 'react'

import '../Products.css'

import FoodCard from '../../foodCard/FoodCard'
import imgPomfrit from '../../../assets/image/pomfrit.jpg'

const ProductFries = () => {
  return (
    <div className='productContainer'>
        <FoodCard title='Pomfrit' image={imgPomfrit} description='Krompir 200 grama'/>
    </div>
  )
}

export default ProductFries