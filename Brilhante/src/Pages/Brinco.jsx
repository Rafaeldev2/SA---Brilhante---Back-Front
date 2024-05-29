import React, { useState } from 'react';
import './Brinco.css';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 'R$ 100,00',
    imageUrl: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 'R$ 150,00',
    imageUrl: 'https://via.placeholder.com/300'
  }
];

const App = () => {
  return (
    <div className="background-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-button">
            <FaCartPlus /> Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
