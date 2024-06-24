import React, { createContext, useState, useEffect } from "react";

export const BrilhanteContext = createContext();

export const BrilhanteContextProvider = ({ children }) => {
  // Estados para gerenciar informações do cliente e carrinho
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

  // Carregar carrinho do armazenamento local se o cliente estiver autenticado
  useEffect(() => {
    if (clienteExistente) {
      const savedCart = localStorage.getItem('cart');
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, [clienteExistente]);

  // Salvar carrinho no armazenamento local quando o carrinho ou a autenticação do cliente mudar
  useEffect(() => {
    if (clienteExistente) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, clienteExistente]);

  // Verificar se o cliente está autenticado
  useEffect(() => {
    if (cliente && cliente.email) {
      setClienteExistente(true);
    } else {
      setClienteExistente(false);
    }
  }, [cliente]);

  // Função para adicionar produto ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Fornecer contexto para componentes filhos
  return (
    <BrilhanteContext.Provider value={{ email, setEmail, cliente, setCliente, cart, setCart, addToCart, clienteExistente, setClienteExistente }}>
      {children}
    </BrilhanteContext.Provider>
  );
};
