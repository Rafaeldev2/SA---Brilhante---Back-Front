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

  function renderProductCards(products, handleQuantityChange) {
    return (
      <div className='div-container'>
        {products.map((product, index) => (
          <div className='div-card-produto' key={product.id}>
            <img className='img-card' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="quantity-container">
              <p className="price">R$ {product.price.toFixed(2)}</p>
              <label htmlFor={`quantity-${product.id}`}>Quantidade:</label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                name={`quantity-${product.id}`}
                min="1"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </div>
            <div className="div-card-price-cart">
              <p className="total-price">Valor Total: R$ {(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <div className="div-card-price-cart">
              <button className="button-add-to-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <BrilhanteContext.Provider value={{ email, setEmail, products, setProducts, handleQuantityChange, renderProductCards }}>
      {children}
    </BrilhanteContext.Provider>
  )
})
