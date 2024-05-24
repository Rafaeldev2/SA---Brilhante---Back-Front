import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //lógica para autenticar o usuário
  //   console.log('Email:', email);
  //   console.log('Senha:', password);
  // };

  return (
    <>
      <div className='background-container'>
        <div className="login-container">
          <div>
            <h2>Login</h2>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
          
            <input
              className="custom-input"
              placeholder='Email:'
              type="email"
            // value={email}
            // onChange={handleEmailChange}
            // required
            />        
            <input
              className="custom-input"
              placeholder='Senha:'
              type="password"
            // value={password}
            // onChange={handlePasswordChange} 
            // required
            />
          <button type="submit">Confirmar</button>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
