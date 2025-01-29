import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Deskripsi from "../components/Deskripsi";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Deskripsi />
      <Footer />
    </>
  );
};

export default Home;
