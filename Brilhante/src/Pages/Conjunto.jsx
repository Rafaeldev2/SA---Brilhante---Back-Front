import React, { useContext, useState } from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Conjunto() {

  return (
    <>
      <div className='home-container'>
        <h1>Conjunto Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default Conjunto;
