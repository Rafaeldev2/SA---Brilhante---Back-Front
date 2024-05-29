import React, { useState } from 'react';
import './Cadastro.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não conferem.');
            return;
        }
        // lógica para cadastrar o usuário
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Senha:', password);
        console.log('CPF:', cpf);
    };

    return (
        <>
            <div className='background-container-register'>
                <div className="signup-container">
                    <div>
                        <h2>Cadastro</h2>
                    </div>
                    <div className='div-input-group'>
                        <div className='space-input'></div>
                        <div className='div-input'>
                            <input
                                className="custom-input"
                                placeholder='Nome de usuário:'
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className='space-input'></div>
                        <div className='div-input'>
                            <input
                                className="custom-input"
                                placeholder='Email:'
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className='space-input'></div>
                        <div className='div-input'>
                            <input
                                className="custom-input"
                                placeholder='CPF:'
                                type="text"
                                value={cpf}
                                onChange={handleCpfChange}
                                required
                            />
                        </div>
                        <div className='space-input'></div>
                        <div className='div-input'>
                            <input
                                className="custom-input"
                                placeholder='Senha:'
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className='space-input'></div>
                        <div className='div-input'>
                            <input
                                className="custom-input"
                                placeholder='Confirmar senha:'
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>
                        <div className='space-input'></div>
                    </div>
                    <div className='div-button'>
                        <button type="submit">Cadastrar</button>
                        <div className='space-input'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
