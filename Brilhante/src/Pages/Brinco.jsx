import React from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Brinco() {
  return (
    <>
      <div className='home-container'>
        <h1>Brinco Page</h1>
        <ProductCards tipo={2} />
      </div>
    </>
  );
}

export default Brinco;
