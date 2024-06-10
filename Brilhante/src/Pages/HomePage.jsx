import React, { useContext, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext"
import './HomePage.css';

function HomePage() {
  const { renderProductCards, products, handleQuantityChange } = useContext(BrilhanteContext);

  return (
    <>
      <div className='home-container'>
        <h1>Home Page</h1>
        {renderProductCards(products, handleQuantityChange)}
      </div>
    </>
  );
}

export default HomePage;
