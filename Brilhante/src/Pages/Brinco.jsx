import React, { useContext, useState } from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Brinco() {

  return (
    <>
      <div className='home-container'>
        <h1>Brinco Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default Brinco;
