import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {BrilhanteContext} from "../Context/GlobalContext"
import './HomePage.css';

function HomePage() {

  const {products, setProducts} = useContext(BrilhanteContext);

  const handleQuantityChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(event.target.value);
    setProducts(newProducts);
  };

  return (
    <>
      <div className='home-container'>
        <h1>Home Page</h1>
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
      </div>
    </>
  );
}

export default HomePage;
