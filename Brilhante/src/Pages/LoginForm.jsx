import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
      <div className='background-container-Login'>
        <div className="login-container">
          <h2>Login</h2>
          <div className='div-input-group'>

            <TextField id="outlined-basic" 
            label="Email" 
            variant="outlined" />

            <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" />
          </div>


          <button type="submit">Confirmar</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
