import React from "react";
import '../styles/DataDokumentasi.css'

const IsiDokumentasi = (props) => {
  return (
    <div className="dokumentasi-display">
      <div className="rightD">
        <div className="dImg">
          <img src={props.imgsrc} alt="bardes1" />
        </div>
      </div>
      <div className="leftD">
        <h1 className="Dtitle">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
        <p className="deskripsi1">
          {props.deskripsi}
        </p>
      </div>
    </div>
  );
};

export default IsiDokumentasi;
