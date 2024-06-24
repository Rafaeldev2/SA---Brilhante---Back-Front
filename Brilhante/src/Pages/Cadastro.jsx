import React, { useContext, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

const Cadastro = () => {

    const [currentClientId, setCurrentClientId] = useState(null);
    const [error, setError] = useState('');
    const [newClient, setNewClient] = useState({
        idClient: '',
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        confirmsenha: ''
    });

    const handleClientChange = (field, value) => {
        setNewClient({ ...newClient, [field]: value });
    };

    const cadastrarCliente = async () => {
        if (newClient.nome.trim() !== '' &&
            newClient.cpf !== '' &&
            newClient.email !== '' &&
            newClient.senha !== '' &&
            newClient.confirmsenha !== '' &&
            newClient.confirmsenha == newClient.senha) {

            const novoClient = {
                nome: newClient.nome.trim(),
                cpf: newClient.cpf,
                email: newClient.email,
                senha: newClient.senha,
                confirmsenha: newClient.confirmsenha
            };

            try {
                const response = await axios.post('http://localhost:8010/brilhante/cliente', novoClient);
                if (response.status === 201) { // Supondo que 201 seja o código de status de sucesso para criação de Client
                    setNewClient({
                        idClient: '',
                        nome: '',
                        cpf: '',
                        email: '',
                        senha: '',
                        confirmsenha: ''
                    });
                    setCurrentClientId(null);
                    setError('');
                }
            } catch (error) {
                console.error('Erro ao cadastrar Client:', error);
                setError('Erro ao cadastrar Client. Por favor, tente novamente.');
            }
        } else {
            setError('Preencha todos os campos antes de cadastrar o Client.');
        }
    };

    return (
        <div className='background-container-Login-register'>
            <div className="signup-login-container">
                <div className='div-h2'>
                    <h2>Cadastro</h2>
                </div>
                <div className='div-input-group'>
                    <div className='div-label-input'>
                        <label className='custom-label'>Nome de usuário</label>
                    </div>
                    <div className='div-input'>
                        <input
                            id="name"
                            className="custom-input"
                            placeholder='Nome de usuário'
                            type="text"
                            value={newClient.nome}
                            onChange={(e) => handleClientChange('nome', e.target.value)}
                        />
                    </div>
                    <div className='div-space-label'></div>
                    <div className='div-label-input'>
                        <label className='custom-label'>Email</label>
                    </div>
                    <div className='div-input'>
                        <input
                            id="email"
                            className="custom-input"
                            placeholder='Email'
                            type="text"
                            value={newClient.email}
                            onChange={(e) => handleClientChange('email', e.target.value)}
                        />
                    </div>
                    <div className='div-space-label'></div>
                    <div className='div-label-input'>
                        <label className='custom-label'>CPF</label>
                    </div>
                    <div className='div-input'>
                        <input
                            id="cpf"
                            className="custom-input"
                            placeholder='CPF'
                            type="text"
                            value={newClient.cpf}
                            onChange={(e) => handleClientChange('cpf', e.target.value)}
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
                            value={newClient.senha}
                            onChange={(e) => handleClientChange('senha', e.target.value)}
                        />
                    </div>
                    <div className='div-space-label'></div>
                    <div className='div-label-input'>
                        <label className='custom-label'>Confirmar Senha</label>
                    </div>
                    <div className='div-input'>
                        <input
                            id="confirmsenha"
                            className="custom-input"
                            placeholder='Confirmar senha'
                            type="senha"
                            value={newClient.confirmsenha}
                            onChange={(e) => handleClientChange('confirmsenha', e.target.value)}
                        />
                    </div>
                    <div className='div-label-input'>

                    </div>
                </div>
                <div className='div-button'>
                    <button className='Button-Login-Cadastro' onClick={cadastrarCliente}>Cadastrar</button>
                    <div className='div-label-input'></div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
