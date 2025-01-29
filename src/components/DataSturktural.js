import React from "react";

import "../styles/Struktural.css";

const StrukturalData = () => {
  return (
    <>
      <div id="struktural" className="struktural">
        <div className="struktural-container">
          <div className="title-struk">
            <h1>STRUKTURAL BARDES</h1>
          </div>
          <div className="bgStruk">
            <div className="card-component">
              <div className="ketua">
                <div className="titleKetua">
                  <h3>Ketua</h3>
                  <div className="card">
                    <p> ________________ </p>
                  </div>
                </div>
              </div>
              <div className="wakilKetua">
                <div className="titleWakil">
                  <h3>Wakil Ketua</h3>
                  <div className="card">
                    <p>Akhmad Dzikra Riyadi</p>
                  </div>
                </div>
              </div>
              <div className="sekBen">
                <div className="bendahara">
                  <h3>Bendahara</h3>
                  <div className="card">
                    <p>Abu Bakar</p>
                  </div>
                </div>
                <div className="sekretaris">
                  <h3>Sekretaris</h3>
                  <div className="card">
                    <p>Mustafa Kamal</p>
                  </div>
                </div>
              </div>
              <div className="seksi">
                <div className="anggota-Humas">
                  <h3>Humas</h3>
                  <div className="card-seksi">
                    <ul>
                      <li>Muhammad Fazril</li>
                      <li>Muhammad Rizal</li>
                      <li>Muhammad Aldi Syahputra</li>
                    </ul>
                  </div>
                </div>
                <div className="anggotaKorlap">
                  <h3>KorLap</h3>
                  <div className="card-seksi">
                    <ul>
                      <li>Rahman</li>
                      <li>Muhammad Zumbri</li>
                      <li>Muhammad Alpian Nor</li>
                    </ul>
                  </div>
                </div>
                <div className="anggotaKes">
                  <h3>Kesehatan</h3>
                  <div className="card-seksi">
                    <ul>
                      <li>Amaluddin Siagian</li>
                      <li>Muhammad Ansyari</li>
                      <li>Muhammad Donny Septian</li>
                    </ul>
                  </div>
                </div>
                <div className="anggotaPem">
                  <h3>Pemeliharaan</h3>
                  <div className="card-seksi">
                    <ul>
                      <li>Ahmad Rifai</li>
                      <li>Muhammad Khafi</li>
                      <li>Muhammad Riswan</li>
                    </ul>
                  </div>
                </div>
                <div className="anggotaDok">
                  <h3>Dokumentasi</h3>
                  <div className="card-seksi">
                    <ul>
                      <li>Muhammad Wahyuni</li>
                      <li>Muhammad Daud</li>
                      <li>Muhammad Aldi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrukturalData;
