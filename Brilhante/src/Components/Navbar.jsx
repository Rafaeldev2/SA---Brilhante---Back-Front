import React from 'react';
import { Link } from 'react-router-dom'

// import '../img/Logo.png'

const Navbar = () => {
  return (
    <nav>
    <Link to="/"> LoginForm</Link>
    {/* <Link to="/Login"> Test</Link> */}
    {/* <Link to="/Carrinho"> Cadastrar</Link>
    <Link to="/Cadastro"> Denunciar usuário</Link> */}
    
</nav>
  );
};

export default Navbar;
