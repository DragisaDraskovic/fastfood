import React from 'react'

import '../Products.css'
import FoodCard from '../../foodCard/FoodCard'

import imgSendvicKulen from '../../../assets/image/sendvicKulen.jpg'
import imgSendvicSuviVrat from '../../../assets/image/sendvicSuviVrat.jpg'
import imgSendvicSunkarica from '../../../assets/image/sendvicSunkarica.jpg'

const ProductSandwich = () => {
  return (
    <div className='productContainer'>
        <FoodCard title='Sendvič kulen' image={imgSendvicKulen} description='Meso 230 grama, lepinja 1 komad' />
        <FoodCard title='Sendvič suvi vrat' image={imgSendvicSuviVrat} description='Meso 230 grama, lepinja 1 komad' />
        <FoodCard title='Sendvič šunkarica' image={imgSendvicSunkarica} description='Meso 230 grama, lepinja 1 komad' />

    </div>
  )
}

export default ProductSandwich