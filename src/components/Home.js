import React from 'react'
import '../styles/Home.css';
import Bardes1 from '../assets/image/bardes3.jpg';

function Home() {
  return (
    <div className='home' id='home'>
        <div className='home-foto'>
            <div className='foto'>
                <img 
                    src={Bardes1}
                    alt='foto-1'
                />
            </div>
        </div>        
        <div className='title-home'>
            <h1>Barisan Relawan Desa (BARDES)</h1>
        </div>
        <div className='dd-one'>
            <div className='deskripsi'>
                <p>
                Bardes (Barisan Relawan Desa) adalah sebuah organisasi yang didirikan dengan semangat dan tujuan mulia untuk menjaga dan melindungi desa dari ancaman kebakaran. Berdiri pada tanggal 4 Desember 2016, Bardes lahir dari kesadaran masyarakat akan pentingnya upaya pencegahan dan penanggulangan kebakaran, terutama di wilayah desa yang rentan terhadap bahaya tersebut.<br></br> <br></br>

                Organisasi ini dibentuk oleh sekelompok pemuda yang memiliki komitmen tinggi terhadap keselamatan lingkungan dan keamanan desa. Dengan semangat gotong royong, para relawan dari berbagai kalangan bersatu untuk membentuk sebuah tim yang siap siaga 24 jam dalam menghadapi situasi darurat kebakaran. Keberadaan Bardes memberikan rasa aman dan ketenangan bagi masyarakat desa, karena mereka tahu bahwa ada sekumpulan relawan yang siap bertindak cepat apabila terjadi kebakaran yang dapat merugikan warga dan harta benda.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home