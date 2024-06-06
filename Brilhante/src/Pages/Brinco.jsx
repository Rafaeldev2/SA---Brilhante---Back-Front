import React, { useState } from 'react';


const Brinco = () => {
  return (
    <>
      <div className='div-card-produto'>
        <h1>Nossas Bijuterias</h1>
        <img className='img-card' src="./img/Brincos/Brico-de-uvas.png" />
        <h2>Nome do Produto</h2>
        <p>Descrição do produto</p>
        <div className="div-card-price-cart">
          <p className="price">R$ 25,00</p>
          <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
          </button>
        </div>
      </div>
    </>
  );
};


export default Brinco;
