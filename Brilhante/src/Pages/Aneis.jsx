import React, { useContext, useState } from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Aneis() {

  return (
    <>
      <div className='home-container'>
        <h1>Aneis Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default Aneis;
