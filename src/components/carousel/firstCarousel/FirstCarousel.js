import React from 'react'

import './FirstCarousel.css'

import Card from '../../card/Card'
import useEmblaCarousel from 'embla-carousel-react'
import imgBurger from '../../../assets/image/burger2.jpg'
import imgFries from '../../../assets/image/fries1.jpg'
import imgTortilla from '../../../assets/image/tortilla1.jpg'
import imgSendwitsch from '../../../assets/image/sendwitsch.jpg'
import imgKaradjordjeva from '../../../assets/image/karadjordjeva.jpg'

const testClcik = () => {
  console.log('kliknuto na podmeniju')
}

const FirstCarousel = () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide" onClick={testClcik}><Card image={imgBurger} text='ROŠTILJ'/></div>
        <div className="embla__slide"><Card image={imgTortilla} text='TORTILJE'/></div>
        <div className="embla__slide"><Card image={imgKaradjordjeva} text='SPECIJALITETI'/></div>
        <div className="embla__slide"><Card image={imgSendwitsch} text='SENDVIČI'/></div>
        <div className="embla__slide"><Card image={imgFries} text='POMFRIT'/></div>
      </div>
    </div>
  )
}

export default FirstCarousel