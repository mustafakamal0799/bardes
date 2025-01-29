import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Struktural from "./routes/Struktural";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/struktural" element={<Struktural />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
