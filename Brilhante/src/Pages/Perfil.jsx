import React, { useContext, useState } from 'react';
import { BrilhanteContext } from '../Context/GlobalContext';

const Perfil = () => {

  const [currentClientId, setCurrentClientId] = useState(null);
  const [attClient, setAttClient] = useState(BrilhanteContext);

  const atualizarPerfil = async () => {
    if (
      attClient.nome.trim() !== '' &&
      attClient.cpf !== '' &&
      attClient.email !== '' &&
      attClient.senha !== '') {

      const clientPerfil = {
        nome: attClient.nome.trim(),
        cpf: attClient.cpf,
        email: attClient.email,
        senha: attClient.senha,
      };

      try {
        const response = await axios.put('http://localhost:8010/brilhante/cliente', clientPerfil);
        if (response.status === 200) {
          setAttClient({
            nome: '',
            cpf: '',
            email: '',
            senha: ''
          });
          setCurrentClientId(response.data.idclient);
          setError('');
        }
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        setError('Erro ao atualizar produto. Por favor, tente novamente.');
      }
    } else {
      setError('Preencha todos os campos antes de atualizar o produto.');
    }
  };

  return (
    <div className='background-container-Login-register'>
      <div className='div-h2'>
        <h2>Perfil do Usuário</h2>
      </div>
      <div className='background-container-perfil' >

        {/* Informações Pessoais */}
        <div className="signup-login-container">
          <h3>Informações Pessoais</h3>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='nome-completo'>Nome completo:</label>
          </div>
          <div className='div-input'>
            <input
              id="name"
              className="custom-input"
              placeholder='Nome de usuário'
              type="text"
              value={attClient.nome}
              onChange={(e) => handleClientChange('nome', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='cpf'>CPF:</label>
          </div>
          <div className='div-input'>
            <input
              id="cpf"
              className="custom-input"
              placeholder='CPF'
              type="text"
              value={attClient.cpf}
              onChange={(e) => handleClientChange('cpf', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='email'>E-mail:</label>
          </div>
          <div className='div-input'>
            <input
              id="email"
              className="custom-input"
              placeholder='Email'
              type="text"
              value={attClient.email}
              onChange={(e) => handleClientChange('email', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='data-nascimento'>Data de nascimento:</label>
          </div>
          <div className='div-input'>
            <input
              id="data-nascimento"
              className="custom-input"
              placeholder='Data de nascimento'
              type="text"
              value={attClient.dataNasc}
              onChange={(e) => handleClientChange('dataNasc', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='celular'>Celular:</label>
          </div>
          <div className='div-input'>
            <input
              id='celular'
              className="custom-input"
              placeholder='Celular'
              type="text"
              value={attClient.celular}
              onChange={(e) => handleClientChange('celular', e.target.value)}
            />
          </div>

        </div>

        {/* Informações do Endereço */}
        <div className="signup-login-container">
          <h3>Informações de Endereço</h3>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='cep'>Cep:</label>
          </div>
          <div className='div-input'>
            <input
              id='cep'
              className="custom-input"
              placeholder='Cep'
              type="text"
              value={attClient.dataNasc}
              onChange={(e) => handleClientChange('dataNasc', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='uf'>UF:</label>
          </div>
          <div className='div-input'>
            <input
              id='uf'
              className="custom-input"
              placeholder='Estado'
              type="text"
              value={attClient.UF}
              onChange={(e) => handleClientChange('UF', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='cidade'>Cidade:</label>
          </div>
          <div className='div-input'>
            <input
              id='cidade'
              className="custom-input"
              placeholder='Cidade'
              type="text"
              value={attClient.cidade}
              onChange={(e) => handleClientChange('cidade', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='bairro'>Bairro:</label>
          </div>
          <div className='div-input'>
            <input
              id='bairro'
              className="custom-input"
              placeholder='Bairro'
              type="text"
              value={attClient.bairro}
              onChange={(e) => handleClientChange('bairro', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='logradouro'>Logradouro:</label>
          </div>
          <div className='div-input'>
            <input
              id='logradouro'
              className="custom-input"
              placeholder='Rua, Av.'
              type="text"
              value={attClient.logradouro}
              onChange={(e) => handleClientChange('logradouro', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='numero'>Número:</label>
          </div>
          <div className='div-input'>
            <input
              id='numero'
              className="custom-input"
              placeholder='Número'
              type="text"
              value={attClient.numEndereco}
              onChange={(e) => handleClientChange('numEndereco', e.target.value)}
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='complemento'>Complemento:</label>
          </div>
          <div className='div-input'>
            <input
              id='complemento'
              className="custom-input"
              placeholder='Complemento'
              type="text"
              value={attClient.compEndereco}
              onChange={(e) => handleClientChange('compEndereco', e.target.value)}
            />
          </div>
          <div className='div-button'>
            <button className='Button-Login-Cadastro' onClick={atualizarPerfil}>Atualizar Perfil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
