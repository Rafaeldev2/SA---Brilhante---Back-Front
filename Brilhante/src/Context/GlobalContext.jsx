import React from "react";
import { createContext, useState } from "react";

export const BrilhanteContext = createContext()

export const BrilhanteContextProvider = (({ children }) => {
  const [email, setEmail] = useState([])

  const [cliente, setCliente] = useState({
    idClient: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    confirmsenha: '',
    perfil: '',
    cep: '',
    logradouro: '',
    numEndereco: '',
    UF: '',
    cidade: '',
    bairro: '',
    compEndereco: '',
    celular: '',
    dataNasc: '',
    vendas: []
  });

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, cliente, setCliente  }}>
      {children}
    </BrilhanteContext.Provider>
  )
})
