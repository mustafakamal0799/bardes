import React from 'react'
import '../styles/Anggota.css'

const CardAnggota = (props) => {
  return (
    <div className='card-anggota'>
        <img src={props.imgsrc} alt='foto-anggota' />
        <h2 className='anggota-title'>{props.title}</h2>
        <div className='anggota-jabatan'>
            <p>{props.ketua}</p>
        </div>
    </div>
  )
}

export default CardAnggota