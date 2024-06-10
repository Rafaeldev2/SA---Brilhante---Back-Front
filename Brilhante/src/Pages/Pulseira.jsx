import React from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

function Pulseira() {

  return (
    <>
      <div className='home-container'>
        <h1>Pulseira Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default Pulseira;
