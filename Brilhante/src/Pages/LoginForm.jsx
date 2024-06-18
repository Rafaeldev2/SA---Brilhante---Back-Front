import React, { useContext, useEffect, useState } from 'react';
import './Login-Cadastro-Perfil.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { BrilhanteContext } from '../Context/GlobalContext';

const LoginForm = () => {


  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const {cliente, setCliente} = useContext(BrilhanteContext);
  const [loginClient, setloginClient] = useState({
    email: '',
    senha: '',
  });

  useEffect(() => {
    console.log(cliente)
  }, [cliente])

  const handleClientChange = (field, value) => {
    setloginClient({ ...loginClient, [field]: value });
  };

  const loginCliente = async () => {
    if (
      loginClient.email &&
      loginClient.senha
    ) {
      const logonClient = {
        email: loginClient.email,
        senha: loginClient.senha
      };

      try {
        const response = await axios.post('http://localhost:8010/brilhante/cliente/login', logonClient);
        if (response.status === 200) { // Supondo que 200 seja o código de status de sucesso para criação de Client
          setError('');
          setLoginSuccess(true)
          setCliente(response.data)
        }
      } catch (error) {
        console.error('Erro de login:', error);
        setError('Erro de login. Por favor, tente novamente.');
      }
    } else {
      setError('Preencha todos os campos antes do login.');
    }
  };

  return (
    <>
      <div className='background-container-Login-register'>
        <div className="signup-login-container">
          <div className='div-h2'>
            <h2>Login</h2>
          </div>
          <div className='div-input-group'>
            <div className='div-label-input'>
              <div className='div-space-label'></div>
              <label className='custom-label'>Email</label>
            </div>
            <div className='div-input'>
              <input
                id="email"
                className="custom-input"
                placeholder='Email'
                type="text"
                value={loginClient.email}
                onChange={(e) => handleClientChange('email', e.target.value)}
              />
            </div>
            <div className='div-space-label'></div>
            <div className='div-label-input'>
              <label className='custom-label'>Senha</label>
            </div>
            <div className='div-input'>
              <input
                id="senha"
                className="custom-input"
                placeholder='Senha'
                type="senha"
                value={loginClient.senha}
                onChange={(e) => handleClientChange('senha', e.target.value)}
              />
            </div>
          </div>
          <div className='space-input'></div>
          <div className='div-button'>

            <button className='Button-Login-Cadastro' type="submit" onClick={loginCliente}>Confirmar</button>
            
            {loginSuccess && (<Navigate to="/" replace={true} />)}

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;