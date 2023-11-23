import React from 'react'

import './Magic.css'

import orderBurger from '../../assets/image/naruciKlopu1.jpg'
import { AiOutlineArrowDown as ArrowDown} from 'react-icons/ai'

const Magic = () => {
  return (
    <div className='magicContainer'>
        <div className='magicDescription'>
            <p className='magicText'> GLADNI STE?</p>
            <p className='magicText'> JESTE LI PROBALI NAŠE SPECIJALITETE?</p>
            <p className='magicText'> POGLEDAJTE ISPOD KAKO MAGIJA FUNKCIONIŠE KOD NAS!</p>
            <ArrowDown size='70px' color='#F7E987' className='magicArrow'/>
        </div>
        <img src={orderBurger} className='magicImage'/>
    </div>
  )
}

export default Magic