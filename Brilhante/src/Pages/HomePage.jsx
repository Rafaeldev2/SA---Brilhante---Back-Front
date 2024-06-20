import React from 'react';
import ProductCards from '../Components/CardProduto';
import './HomePage.css';

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
