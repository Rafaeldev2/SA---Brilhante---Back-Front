import React from "react";
import axios from 'axios'
import { createContext, useState } from "react";

export const BrilhanteContext = createContext()

export const BrilhanteContextProvider = (({ children }) => {
  const [email, setEmail] = useState([])

  const [products, setProducts] = useState([
    { id: 1, name: 'Anel com firulas', tipo: 'Anel', description: 'Descrição do produto', price: 15, quantity: 1 },
    { id: 2, name: 'Brico de uvas', tipo: 'Brinco', description: 'Descrição do produto', price: 25, quantity: 1 },
    { id: 3, name: 'Colar de perolas', tipo: 'Colar', description: 'Descrição do produto', price: 30, quantity: 1 },
    { id: 4, name: 'Conjunto Persa', tipo: 'Conjunto', description: 'Descrição do produto', price: 40, quantity: 1 },
    { id: 5, name: 'Misanga arco iris', tipo: 'Pulseira', description: 'Descrição do produto', price: 5, quantity: 1 },
    // Adicione mais produtos conforme necessário
  ]);

  const handleQuantityChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(event.target.value);
    setProducts(newProducts);
  };

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, products, setProducts, handleQuantityChange }}>
      {children}
    </BrilhanteContext.Provider>
  )
})
