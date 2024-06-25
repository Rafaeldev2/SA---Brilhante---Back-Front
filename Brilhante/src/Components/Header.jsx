import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from './Login';
import Logoff from './Logoff';
import { BrilhanteContext } from '../Context/GlobalContext';

const Header = () => {
  const { clienteExistente, setClienteExistente } = useContext(BrilhanteContext);

  useEffect(() => {
    const storedCliente = localStorage.getItem('cliente');
    setClienteExistente(!!storedCliente);
  }, [setClienteExistente]);

  function carregarCliente(){
    const storedCliente = localStorage.getItem('cliente');
    setClienteExistente(!!storedCliente);
  }

  return (
    <header onLoad={carregarCliente} className="header">
      <div className="header-left">
        <Link to="/">
          <img src="./img/Brilhante.png" className="ImgBrilhante" alt="Logo" />
        </Link>
        <div className="header-links">
          {['Aneis', 'Brinco', 'Colar', 'Conjunto', 'Pulseira'].map((item) => (
            <Link key={item} to={`/${item}`} className="header-link">{item}</Link>
          ))}
        </div>
      </div>
      <div className="header-right">
        {clienteExistente ? <Logoff /> : <Login />}
        <Link to="/Perfil" className="header-icon">
          <img src="./img/Perfil.png" className="ImgIcons" alt="Perfil" />
        </Link>
      </div>
    </header>
  );
};

export default Header;