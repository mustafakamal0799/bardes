import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Struktural from './components/Struktural';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/struktural" element={<Struktural />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
