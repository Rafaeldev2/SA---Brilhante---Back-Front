import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BrilhanteContext } from '../Context/GlobalContext';

const Login = () => {
    const { clienteExistente, setClienteExistente } = useContext(BrilhanteContext);

    return (
        <div>
            <Link to="/Cadastro" className="header-icon">
                <img src="./img/Edit.png" className="ImgIcons" alt="Cadastro" />
            </Link>
            <Link to="/Login" className="header-icon">
                <img src="./img/Login.png" className="ImgIcons" alt="Login" />
            </Link>
        </div>
    )
};

export default Login;