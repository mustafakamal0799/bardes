import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa'
import '../styles/Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome className='icon'/>
                    <div>
                        <p>Jl. Negara Kandangan, Banjar Baru</p>
                        <p>Kalimantan Selatan</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone className='icon'/>
                    0821 5492 3388
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk className='icon'/>
                    bardes.firefighter@gmail.com
                    </h4>
                </div> 
            </div>
            <div className='right'>
                <h4>Barisan Relawan Desa</h4>
                <p>Bergerak di bidang penanggulangan bencana kebakaran rumah dan lahan, merupakan unit yang di buat guna mencegah kebakaran rumah ataupun lahan.
                </p>
                <div className='sosial'>
                <FaWhatsapp className='icon'/>
                <FaInstagram className='icon'/>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Footer