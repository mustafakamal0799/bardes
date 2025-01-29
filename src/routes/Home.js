import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Deskripsi from "../components/Deskripsi";
import DataDokumentasi from "../components/DataDokumentasi";
import Kegiatan from "../components/Kegiatan";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Deskripsi />
      <Kegiatan />
      <Footer />
    </>
  );
};

export default Home;
