import React, { useContext, useState } from 'react';
import { BrilhanteContext } from '../Context/GlobalContext';

function ProductCards() {

    const { products, handleQuantityChange } = useContext(BrilhanteContext);

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

export default ProductCards;