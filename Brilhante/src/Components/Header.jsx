import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from './Login';
import Logoff from './Logoff';
import { BrilhanteContext } from '../Context/GlobalContext';

const HomePage = () => {
  // Verifica se o objeto cliente existe no localStorage

  const [clienteExistente, setClienteExistente] = useState(localStorage.getItem('cliente'));

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <img src="./img/Brilhante.png" className="ImgBrilhante" alt="Logo" />
          </Link>
          <div className="header-links">
            <Link to="/Aneis" className="header-link">Anéis</Link>
            <Link to="/Brinco" className="header-link">Brinco</Link>
            <Link to="/Colar" className="header-link">Colar</Link>
            <Link to="/Conjunto" className="header-link">Conjunto</Link>
            <Link to="/Pulseira" className="header-link">Pulseira</Link>
          </div>
        </div>
        <div className="header-right">
          {/* Verifica se o cliente existe no localStorage e condiciona o link */}
          {clienteExistente ? <Logoff/> : <Login/>}
          <Link to="/Perfil" className="header-icon">
            <img src="./img/Perfil.png" className="ImgIcons" alt="Perfil" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
