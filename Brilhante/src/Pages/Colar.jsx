import React, { useContext, useState } from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Colar() {

  return (
    <>
      <div className='home-container'>
        <h1>Colar Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default Colar;
