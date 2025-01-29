import '../styles/Navbar.css';
import Bardes from '../assets/image/bardes.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    }else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); 
   
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <div className='nav-logo'>
          <div className='logo'>
            <img 
              src={Bardes}
              alt='logo-bardes'
            />            
          </div>
          <div className='title'>
            <strong>BARDES</strong>
          </div>
        </div>        
        <div className='nav-link'>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/struktural">Struktural</Link></li>
            <li><Link to="/anggota">Anggota</Link></li>
            <li><Link to="/dokumentasi">Dokumentasi</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar