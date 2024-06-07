import React, { useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext"


function Pulseira() {
  const { products, setProducts } = useContext(BrilhanteContext);

  const handleQuantityChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(event.target.value);
    setProducts(newProducts);
  };

  return (
    <>
      <div className='home-container'>
        <h1>Bracelet Page</h1>
        <div className='div-container'>
          {products.map((product, index) => (
            <div className='div-card-produto' key={product.id}>
              <img className='img-card' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} />
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
              <div className="div-card-price-cart">
                <p className="price">R$ {product.price.toFixed(2)}</p>
                <button className="cart-button"><img src="./img/Add-cart.png" className="card-icon" alt="Cart" /></button>
              </div>
              <div className="div-card-price-cart">
                <p className="total-price">Valor Total: R$ {(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pulseira;