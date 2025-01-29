import React from 'react'
import '../styles/DataDokumentasi.css'
import DataDokument from './DokumenData'
import IsiDokumentasi from './IsiDokumentasi'

const DataDokumentasi = () => {
  return (
    <div className='dokumentasi-main'>
        <div className='dokumentasi-container'>
           {DataDokument.map((data, index)=> (
            <IsiDokumentasi 
                key={index}
                imgsrc={data.imgsrc}
                title={data.title}
                subtitle={data.subtitle}
                deskripsi={data.deskripsi}
            />
           ))}
        </div>
    </div>
  )
}

export default DataDokumentasi