import React, { useContext, useState } from 'react';

const Perfil = () => {
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
              id='nome-completo'
              className="custom-input"
              placeholder='Nome e sobrenome'
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='cpf'>CPF:</label>
          </div>
          <div className='div-input'>
            <input
              id='cpf'
              className="custom-input"
              placeholder='CPF'
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='email'>E-mail:</label>
          </div>
          <div className='div-input'>
            <input
              id='email'
              className="custom-input"
              placeholder='E-mail'
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='data-nascimento'>Data de nascimento:</label>
          </div>
          <div className='div-input'>
            <input
              id='data-nascimento'
              className="custom-input"
              placeholder='Data de nascimento'
            />
          </div>
          <div className='div-space-label'></div>
          <div className='div-label-input'>
            <label className='custom-label' htmlFor='telefone'>Telefone:</label>
          </div>
          <div className='div-input'>
            <input
              id='telefone'
              className="custom-input"
              placeholder='Telefone'
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
            />
          </div>
          <div className='div-button'>
            <button className='Button-Login-Cadastro'>Editar Endereço</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
