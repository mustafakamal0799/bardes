import '../styles/Navbar.css';
import Bardes from '../assets/image/bardes.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
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
            <li><a href='#anggota'>Anggota</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar