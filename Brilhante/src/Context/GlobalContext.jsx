import React, { createContext, useState, useEffect } from "react";

export const BrilhanteContext = createContext();

export const BrilhanteContextProvider = ({ children }) => {
  const [email, setEmail] = useState([]);
  const [cart, setCart] = useState([]);
  const [clienteExistente, setClienteExistente] = useState(!!localStorage.getItem('cliente'));
  const [cliente, setCliente] = useState({
    IDCliente: '',  // Alterado de idClient para IDCliente
    nome: '',
    cpf: '',
    email: '',
    senha: '',
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

  useEffect(() => {
    setClienteExistente(!!cliente.email);
  }, [cliente]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, cliente, setCliente, cart, setCart, addToCart, clienteExistente, setClienteExistente }}>
      {children}
    </BrilhanteContext.Provider>
  );
};
