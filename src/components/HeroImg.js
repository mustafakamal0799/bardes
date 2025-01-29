import React from 'react'
import '../styles/HeroImg.css'
import BardesFr from '../assets/image/bardesfr.jpg'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={BardesFr} alt='IntroImg' />
        </div>
    </div>
  )
}

export default HeroImg