import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Struktural from "./routes/Struktural";
import Anggota from "./routes/Anggota";
import Dokumentasi from "./routes/Dokumentasi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/struktural" element={<Struktural />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
