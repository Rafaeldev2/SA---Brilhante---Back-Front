import React, { createContext, useState, useEffect } from "react";

export const BrilhanteContext = createContext();

export const BrilhanteContextProvider = ({ children }) => {
  const [email, setEmail] = useState([]);
  const [cart, setCart] = useState([]);
  const [clienteExistente, setClienteExistente] = useState(localStorage.getItem('cliente'));

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

  // Load cart from localStorage if clienteExistente is true
  useEffect(() => {
    if (clienteExistente) {
      const savedCart = localStorage.getItem('cart');
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, [clienteExistente]);

  useEffect(() => {
    if (clienteExistente) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, clienteExistente]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, cliente, setCliente, cart, setCart, addToCart, clienteExistente, setClienteExistente }}>
      {children}
    </BrilhanteContext.Provider>
  );
};
