import React from 'react'

import '../Products.css'

import FoodCard from '../../foodCard/FoodCard'

import imgPljeskavica1 from '../../../assets/image/pljeskavica1.jpg'
import imgPljeskavica2 from '../../../assets/image/pljeskavica2.jpg'
import imgCevapi from '../../../assets/image/cevapi1.jpg'
import imgPunjenaPljeskavica from '../../../assets/image/punjenaPleskavica.jpg'
import imgGurmanskaPljeskavica from '../../../assets/image/gurmanskaPljeskavica.jpg'
import imgBeloMeso from '../../../assets/image/beloMeso.jpg'
import imgRostiljKobasica from '../../../assets/image/rostiljKobasice.jpg'
import imgPileciBatak from '../../../assets/image/pileciBatak.jpg'
import imgPunjeniPileciBatak from '../../../assets/image/punjeniPileciBatak.jpg'
import imgMesanoMeso from '../../../assets/image/mesanoMeso.jpg'

const ProductGrill = () => {
  return (
    <div className='productContainer'>
      <FoodCard title='Pljeskavica' image={imgPljeskavica1} description='Meso 200 grama, lepinja 1 komad'/>
      <FoodCard title='Pljeskavica' image={imgPljeskavica2} description='Meso 100 grama, lepinja 1 komad' />
      <FoodCard title='Ćevapi' image={imgCevapi} description='Meso 200 grama, lepinja 1 komad' />
      <FoodCard title='Punjena pljeskavica' image={imgPunjenaPljeskavica} description='Meso 230 grama, lepinja 1 komad' />
      <FoodCard title='Gurmanska pljeskavica' image={imgGurmanskaPljeskavica} description='Meso 230 grama, lepinja 1 komad' />
      <FoodCard title='Belo meso' image={imgBeloMeso} description='Meso 150 grama, lepinja 1 komad' />
      <FoodCard title='Roštilj kobasica' image={imgRostiljKobasica} description='Meso 150 grama, lepinja 1 komad' />
      <FoodCard title='Pileći batak' image={imgPileciBatak} description='Meso 200 grama, lepinja 1 komad' />
      <FoodCard title='Punjeni pileći batak' image={imgPunjeniPileciBatak} description='Meso 230 grama, lepinja 1 komad' />
      <FoodCard title='Mešano meso' image={imgMesanoMeso} description='Meso 1 kilogram, lepinja 3 komad' />
    </div>
  )
}

export default ProductGrill