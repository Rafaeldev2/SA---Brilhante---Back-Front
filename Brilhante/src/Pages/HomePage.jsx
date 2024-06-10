import React from 'react';

import './HomePage.css';
import ProductCards from '../Components/CardProduto';

function HomePage() {

  return (
    <>
      <div className='home-container'>
        <h1>Home Page</h1>
        <ProductCards />
      </div>
    </>
  );
}

export default HomePage;
