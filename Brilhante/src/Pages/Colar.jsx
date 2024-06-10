import React, { useContext, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext"

function Colar() {
  const { renderProductCards, products, handleQuantityChange } = useContext(BrilhanteContext);

  return (
    <>
      <div className='home-container'>
        <h1>Necklace Page</h1>
        {renderProductCards(products, handleQuantityChange)}
      </div>
    </>
  );
}

export default Colar;