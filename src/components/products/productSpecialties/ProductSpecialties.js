import React from 'react'

import '../Products.css'

import FoodCard from '../../foodCard/FoodCard'

import imgUstipci from '../../../assets/image/ustipci.jpg'
import imgPohovanoBeloMeso from '../../../assets/image/pohovanoBeloMeso.jpg'
import imgBeckaSnicla from '../../../assets/image/beckaSnicla.jpg'
import imgPileciMix from '../../../assets/image/pileciMiks.jpg'
import imgKordonBlu from '../../../assets/image/kordonBlu.jpg'

const ProductSpecialties = () => {
  return (
    <div className='productContainer'>
        <FoodCard title='Uštipci' image={imgUstipci} description='Meso 200 grama, lepinja 1 komad' />
        <FoodCard title='Pohovano belo meso' image={imgPohovanoBeloMeso} description='Meso 200 grama, lepinja 1 komad' />
        <FoodCard title='Bečka šnicla' image={imgBeckaSnicla} description='Meso 200 grama, lepinja 1 komad' />
        <FoodCard title='Pileći mix' image={imgPileciMix} description='Meso 200 grama, lepinja 1 komad' />
        <FoodCard title='Kordon blu' image={imgKordonBlu} description='Meso 250 grama, lepinja 1 komad' />
    </div>
  )
}

export default ProductSpecialties