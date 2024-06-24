import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ClearLocalStorage from './ClearLocalStorage';
import { BrilhanteContext } from '../Context/GlobalContext';

const Logoff = () => {
    const { clienteExistente, setClienteExistente } = useContext(BrilhanteContext);

    return (
        <div>
            <Link to="/Login" onClick={ClearLocalStorage} className="header-icon">
                <img src="./img/Logout.png" className="ImgIcons" alt="Logout" />
            </Link>
            <Link to="/Carrinho" className="header-icon">
                <img src="./img/Cart.png" className="ImgIcons" alt="Carrinho" />
            </Link>
        </div>
    )
};

export default Logoff;