import React from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Colar() {
  return (
    <>
      <div className='home-container'>
        <h1>Colar Page</h1>
        <ProductCards tipo={3} />
      </div>
    </>
  );
}

export default Colar;
