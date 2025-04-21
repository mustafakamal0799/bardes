import React from "react";
import "../styles/Anggota.css";
import CardAnggota from "./CardAnggota";
import DataAnggota from "./DataAnggota";
import DataStruktural from "./DataSturktural";
import CardKetua from "./CardKetua";
import DataPilar from "./DataPilar";

const Anggota1 = () => {
  return (
    <div className="a-container">
    <h1 className="ang-heading">ANGGOTA BARDES</h1>
        <div className="cardpilar">
            <div className="pilar-container">
                {DataPilar.filter(p => p.jabatan === 'Ketua').map((val, ket) => {
                    return (
                        <CardKetua 
                            key={ket}
                            img={val.img}
                            name={val.name}
                            jabatan={val.jabatan}
                        />
                    )
                })}
            </div>
        </div>
        <div className="cardpilar">
            <div className="pilar-container">
                {DataPilar.filter(p => p.jabatan === 'Wakil Ketua').map((val, ket) => {
                    return (
                        <CardKetua 
                            key={ket}
                            img={val.img}
                            name={val.name}
                            jabatan={val.jabatan}
                        />
                    )
                })}
            </div>
        </div>
        <div className="cardpilar">
            <div className="pilar-container">
                {DataPilar.filter(p => p.jabatan === 'Bendahara').map((val, ket) => {
                    return (
                        <CardKetua 
                            key={ket}
                            img={val.img}
                            name={val.name}
                            jabatan={val.jabatan}
                        />
                    )
                })}
            </div>
        </div>
        <div className="cardpilar">
            <div className="pilar-container">
                {DataPilar.filter(p => p.jabatan === 'Sekretaris').map((val, ket) => {
                    return (
                        <CardKetua 
                            key={ket}
                            img={val.img}
                            name={val.name}
                            jabatan={val.jabatan}
                        />
                    )
                })}
            </div>
        </div>

      <div className="anggota-container">
        {DataAnggota.filter(p => p.jabatan === "Humas").map((val, ind) => {
          return (
            <CardAnggota
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              ketua={val.jabatan}
            />
          );
        })}
      </div>
      <div className="anggota-container">
        {DataAnggota.filter(p => p.jabatan === "Pemeliharaan").map((val, ind) => {
          return (
            <CardAnggota
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              ketua={val.jabatan}
            />
          );
        })}
      </div>
      <div className="anggota-container">
        {DataAnggota.filter(p => p.jabatan === "Kesehatan").map((val, ind) => {
          return (
            <CardAnggota
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              ketua={val.jabatan}
            />
          );
        })}
      </div>
      <div className="anggota-container">
        {DataAnggota.filter(p => p.jabatan === "Dokumentasi").map((val, ind) => {
          return (
            <CardAnggota
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              ketua={val.jabatan}
            />
          );
        })}
      </div>
      <div className="anggota-container">
        {DataAnggota.filter(p => p.jabatan === "Kordinator Lapangan").map((val, ind) => {
          return (
            <CardAnggota
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              ketua={val.jabatan}
            />
          );
        })}
      </div>
      <DataStruktural />
    </div>
  );
};

export default Anggota1;
