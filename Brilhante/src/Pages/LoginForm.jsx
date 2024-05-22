import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <>
      <div className='background-container'>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
