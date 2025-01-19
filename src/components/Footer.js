import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-list'>
            <div className='link'>            
                <div className='int'>
                <FontAwesomeIcon icon={faInstagram} />
                    <p>bardes_firefighter_</p>
                </div>
                <div className='tt'>
                <FontAwesomeIcon icon={faTiktok} />
                    <p>Bardes Fire Fighter</p>
                </div>
            </div>
            <div className='wa'>
            <FontAwesomeIcon icon={faWhatsapp} />
                <p>082154923366</p>
            </div>
        </div>        
    </div>
  )
}

export default Footer