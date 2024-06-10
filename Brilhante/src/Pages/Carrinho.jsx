import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {BrilhanteContext} from "../Context/GlobalContext"

function Carrinho() {

  const {products, setProducts} = useContext(BrilhanteContext);

  const{handleQuantityChange} = useContext(BrilhanteContext)

  return (
    <>
      <div className='carrinho-container'>
        <h1>Cart Page</h1>
        <div className='products-container'>
          {products.map((product, index) => (
            <div className='product-card' key={product.id}>
              <img className='product-image' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} />
              <div className='product-details'>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="quantity-container">
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
                <div className="price-cart-container">
                  <p className="product-price">R$ {product.price.toFixed(2)}</p>
                  <button className="remove-from-cart-button">Remover do Carrinho</button>
                </div>
                <div className="price-cart-container">
                  <p className="total-price">Valor Total: R$ {(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </>
  );
}

export default Carrinho;
