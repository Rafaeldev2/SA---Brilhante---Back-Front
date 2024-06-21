import React, { createContext, useState, useEffect } from "react";

export const BrilhanteContext = createContext();

export const BrilhanteContextProvider = ({ children }) => {
  const [email, setEmail] = useState([]);
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cliente, setCliente] = useState(() => {
    const savedClient = localStorage.getItem('cliente');
    return savedClient ? JSON.parse(savedClient) : {
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
    };
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }, [cliente]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, cliente, setCliente, cart, addToCart }}>
      {children}
    </BrilhanteContext.Provider>
  );
};
