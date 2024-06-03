import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <img src="./img/Brilhante.png" className="ImgBrilhante" alt="Logo" />
          </Link>
          <div className="header-links">
            <Link to="/Pulseira" className="header-link">Pulseira</Link>
            <Link to="/Brinco" className="header-link">Brinco</Link>
            <Link to="/Colar" className="header-link">Colar</Link>
            <Link to="/Conjunto" className="header-link">Conjunto</Link>
          </div>
        </div>
        <div className="header-right">
          <Link to="/Cadastro" className="header-icon">
            <img src="./img/Edit.png" className="ImgIcons" alt="Edit" />
          </Link>
          <Link to="/Login" className="header-icon">
            <img src="./img/Login.png" className="ImgIcons" alt="Login" />
          </Link>
          <Link to="/Carrinho" className="header-icon">
            <img src="./img/Cart.png" className="ImgIcons" alt="Cart" />
          </Link>
        </div>
      </header>
      <main>
        {/* Conteúdo principal da home page */}
      </main>
    </div>
  );
};

export default HomePage;
