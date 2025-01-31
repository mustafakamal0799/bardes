import React from 'react'
import '../styles/Anggota.css'
import CardAnggota from './CardAnggota'
import DataAnggota from './DataAnggota'
import DataStruktural from './DataSturktural'


const Anggota1 = () => {
  return (
    <div className='a-container'>
        <h1 className='ang-heading'>ANGGOTA BARDES</h1>
        <div className='anggota-container'>
            {DataAnggota.map((val, ind) => {
                return (
                    <CardAnggota 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        jabatan={val.jabatan}
                    />
                )
            })}
        </div>
        <DataStruktural />
    </div>
  )
}

export default Anggota1