import React from 'react'
import '../styles/Anggota.css'

const CardKetua = (props) => {
  return (
    <div className='card-pilar'>
        <img src={props.img} alt='foto-anggota' />
        <h2 className='anggota-title'>{props.name}</h2>
        <div className='anggota-jabatan'>
            <p>{props.jabatan}</p>
        </div>
    </div>
  )
}

export default CardKetua