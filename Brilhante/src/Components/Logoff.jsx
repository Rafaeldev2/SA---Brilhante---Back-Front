import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ClearLocalStorage from './ClearLocalStorage';

const Logoff = () => {
  const handleLogoffClick = () => {
    ClearLocalStorage();
    window.location.href = "/Login"; // Redireciona para a página de login após limpar o armazenamento local
  };

  return (
    <div>
      <Link to="/Login" onClick={handleLogoffClick} className="header-icon">
        <img src="./img/Logout.png" className="ImgIcons" alt="Logout" />
      </Link>
      <Link to="/Carrinho" className="header-icon">
        <img src="./img/Cart.png" className="ImgIcons" alt="Carrinho" />
      </Link>
    </div>
  );
};

export default Logoff;
