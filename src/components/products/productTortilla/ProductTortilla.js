import React from 'react'

import '../Products.css'
import FoodCard from '../../foodCard/FoodCard'

import imgPiletinaUTortilji from '../../../assets/image/piletinaUTortilji.jpg'
import imgPiletinaUTortiljiSaSampinjonima from '../../../assets/image/piletinaUTortiljiSaSampinjonima.jpg'
import imgMalaTortilja from '../../../assets/image/malaTortiljajpg.jpg'

const ProductTortilla = () => {
  return (
    <div className='productContainer'>
        <FoodCard title='Piletina u tortilji' image={imgPiletinaUTortilji} description='Meso 200 grama, tortilja 1 komad'/>
        <FoodCard title='Piletina u tortilji sa šampinjonima' image={imgPiletinaUTortiljiSaSampinjonima} description='Meso 250 grama, tortilja 1 komad'/>
        <FoodCard title='Mala tortilja' image={imgMalaTortilja} description='Meso 200 grama, tortilja 1 komad'/>
    </div>
  )
}

export default ProductTortilla