import React, { useContext, useState } from 'react';
import './Login-Cadastro-Perfil.css';
import { BrilhanteContext } from '../Context/GlobalContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const [attClient, setAttClient] = useState(BrilhanteContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlesenhaChange = (event) => {
    setsenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //lógica para autenticar o usuário
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <>
      <div className='background-container-Login-register'>
        <div className="signup-login-container">
          <div className='div-h2'>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
          <div className='div-input-group'>
            <div className='div-label-input'>
              <div className='div-space-label'></div>
            <label className='custom-label'>Email</label>
            </div>
            <div className='div-input'>
              <input
                className="custom-input"
                placeholder='Email'
                type="email"
              value={email}
              onChange={handleEmailChange}
              required
              />
            </div>
            <div className='div-space-label'></div>
            <div className='div-label-input'>
            <label className='custom-label'>Senha</label>
            </div>
            <div className='div-input'>
              <input
                className="custom-input"
                placeholder='Senha'
                type="senha"
              value={senha}
              onChange={handlesenhaChange} 
              required
              />
            </div>
          </div>
          <div className='space-input'></div>
          <div className='div-button'>
            <button className='Button-Login-Cadastro' type="submit">Confirmar</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
