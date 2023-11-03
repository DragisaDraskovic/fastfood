import React from 'react'

import './Magic.css'

import orderBurger from '../../assets/image/naruciKlopu1.jpg'
import { AiOutlineArrowDown as ArrowDown} from 'react-icons/ai'

const Magic = () => {
  return (
    <div>
        <div className='magicDescription'>
            <h2 className='magicText'> GLADNI STE?</h2>
            <h2 className='magicText'> JESTE LI PROBALI NAŠE SPECIJALITETE?</h2>
            <h2 className='magicText'> POGLEDAJTE ISPOD KAKO MAGIJA FUNKCIONIŠE KOD NAS!</h2>
            <ArrowDown size='60px' color='#F7E987' className='magicArrow'/>
        </div>
        <img src={orderBurger} className='magicImage'/>
    </div>
  )
}

export default Magic