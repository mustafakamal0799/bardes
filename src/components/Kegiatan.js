import React from 'react'
import Bardes1 from '../assets/image/bardes1.jpg'
import Bardes2 from '../assets/image/bardes2.jpg'
import '../styles/Kegiatan.css'

const Kegiatan = () => {
  return (
    <div className='kegiatan'>
        <div className='k-container'>
            <div className='display-k'>
                <h1 className='k-title'>Dokumentasi Kegiatan</h1>
                <hr></hr>
                <br></br>
                <div className='card-k'>
                    <div>
                        <img src={Bardes1} alt='image' />
                    </div>
                    <div>
                        <img src={Bardes2} alt='image' />
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Kegiatan