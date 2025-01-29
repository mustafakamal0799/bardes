import '../styles/HeroImg2.css'
import React from 'react'
import Bardes1 from '../assets/image/bardes1.jpg'

const HeroImg2 = () => {
  return (
    <div className='hero-img'>
      <div className='heading'>
      <img className='into-img' src={Bardes1} alt='IntroImg' />
      </div>
    </div>
  )
}

export default HeroImg2

