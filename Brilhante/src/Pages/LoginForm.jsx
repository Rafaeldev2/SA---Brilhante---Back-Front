import React, { useState } from 'react';


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
      <div className='background-container-Login-register'>
        <div className="signup-login-container">
          <div className='div-h2'>
            <h2>Login</h2>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
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
              // value={email}
              // onChange={handleEmailChange}
              // required
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
                type="password"
              // value={password}
              // onChange={handlePasswordChange} 
              // required
              />
            </div>
          </div>
          <div className='space-input'></div>
          <div className='div-button'>
            <button type="submit">Confirmar</button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
